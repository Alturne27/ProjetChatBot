// app/api/chat/delete/[id]/route.ts
import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const DELETE = auth(async function DELETE(req, ctx) {
  if (!req.auth) {
    return NextResponse.json(
      { error: "Utilisateur non authentifié" },
      { status: 401 }
    );
  }

  const params = await ctx.params;
  const sessionId = params.id;

  const session = await prisma.chatSession.findUnique({
    where: { id: sessionId },
    select: { userId: true },
  });

  if (!session) {
    return NextResponse.json({ error: "Session introuvable" }, { status: 404 });
  }

  if (session.userId !== req.auth.user?.id) {
    return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
  }
  try {
    await prisma.chatSession.delete({
      where: { id: sessionId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur suppression session", error);
    return NextResponse.json(
      { error: "Échec de la suppression" },
      { status: 500 }
    );
  }
});
