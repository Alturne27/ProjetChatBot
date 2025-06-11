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
  const { id, title, userId, messages } = body;

  // Vérifier que l'utilisateur crée une session pour lui-même
  if (req.auth.user?.id !== userId) {
    return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
  }
  try {
    const created = await prisma.chatSession.create({
      data: {
        id,
        title,
        userId,
        messages: {
          create: messages,
        },
      },
      include: {
        messages: true,
      },
    });

    return NextResponse.json(created);
  } catch (error) {
    console.error("Erreur création session avec messages", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
});
