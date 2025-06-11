import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const POST = auth(async function POST(req) {
  // Vérifier l'authentification
  if (!req.auth) {
    return NextResponse.json(
      { error: "Utilisateur non authentifié" },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { id, message, role, createdAt, chatSessionId } = body;

  // Vérifier que la session de chat appartient à l'utilisateur authentifié
  const chatSession = await prisma.chatSession.findUnique({
    where: { id: chatSessionId },
    select: { userId: true },
  });

  if (!chatSession) {
    return NextResponse.json(
      { error: "Session de chat introuvable" },
      { status: 404 }
    );
  }

  if (chatSession.userId !== req.auth.user?.id) {
    return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
  }
  try {
    const created = await prisma.chatMessage.create({
      data: {
        id,
        message,
        role,
        createdAt,
        chatSessionId,
      },
    });

    return NextResponse.json(created);
  } catch (error) {
    console.error("Erreur création message", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
});
