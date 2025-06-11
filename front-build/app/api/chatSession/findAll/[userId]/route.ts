// app/api/chatSession/findAll/[userId]/route.ts
import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req, ctx) {
  // Vérifier l'authentification
  if (!req.auth) {
    return NextResponse.json(
      { error: "Utilisateur non authentifié" },
      { status: 401 }
    );
  }

  const params = await ctx.params;
  const userId = params.userId;

  // Optionnel: Vérifier que l'utilisateur demande ses propres sessions
  if (req.auth.user?.id !== userId) {
    return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
  }

  try {
    const sessions = await prisma.chatSession.findMany({
      where: { userId },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    return NextResponse.json(sessions);
  } catch (error) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      { error: "Failed to fetch sessions" },
      { status: 500 }
    );
  }
});
