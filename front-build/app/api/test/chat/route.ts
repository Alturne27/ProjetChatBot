import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    // Vérifier que le texte est fourni
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        {
          error:
            'Le champ "text" est requis et doit être une chaîne de caractères',
        },
        { status: 400 }
      );
    }

    // Ajouter "il a dit" au texte
    const response = text + " il a dit";

    return NextResponse.json({
      success: true,
      message: response,
    });
  } catch (error) {
    console.error("Erreur dans l'endpoint POST:", error);
    return NextResponse.json(
      { error: `Erreur interne du serveur ${error}` },
      { status: 500 }
    );
  }
}
