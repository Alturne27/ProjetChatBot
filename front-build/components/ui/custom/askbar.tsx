import React, { useState } from "react";
import { Input } from "@/components/ui/8bit/input";
import { Button } from "@/components/ui/8bit/button";
import { ChildProcessWithoutNullStreams } from "child_process";
import { createId } from "@paralleldrive/cuid2";
import { useSession } from "next-auth/react";

interface AskbarProps {
  newChatSession: ChatSession | null;
  setNewChatSession: (
    session:
      | ChatSession
      | null
      | ((prevSession: ChatSession | null) => ChatSession | null)
  ) => void;
  setChatSessions: (
    sessions: ChatSession[] | ((prevSessions: ChatSession[]) => ChatSession[])
  ) => void;
  setIsResponseLoading: (isLoading: boolean) => void;
}

const Askbar = ({
  newChatSession,
  setNewChatSession,
  setChatSessions,
  setIsResponseLoading,
}: AskbarProps) => {
  const [inputValue, setInputValue] = useState("");
  const { data: session } = useSession();

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const question = inputValue.trim();
    // Réinitialiser l'input après envoi
    setInputValue("");

    const newChatSessionID = createId();
    // créer une nouvelle session
    const newChatMessage: ChatMessage = {
      id: createId(),
      message: inputValue,
      role: "user",
      createdAt: new Date().toISOString(),

    };

    let newSession: ChatSession = {
      id: "",
      title: "",
      messages: [],
      userId: "",
    };

    if (newChatSession === null) {


      const response = await fetch("http://localhost:80/chat/session", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Session-Id": newChatSessionID,
        },
        body: JSON.stringify({ content: question }),
      });

      const titleData = await response.json();

      newSession = {
        id: newChatSessionID, // optionnel
        title: titleData.content,
        messages: [newChatMessage],
        userId: session?.user?.id || "heyy",
      };

      setNewChatSession(newSession);

      setChatSessions((prevSessions: ChatSession[]) => [
        ...prevSessions,
        newSession,
      ]);
      // envoyer le message au backend
      await fetch("/api/chatSession/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSession),
      });
    } else {
      // envoyer le message au backend
      newChatMessage.chatSessionId = newChatSession.id; // Associer le message à la session existante

      // Mettre à jour la session existante avec le nouveau message
      setNewChatSession((prevSession: ChatSession | null) => {
        if (!prevSession) return null;
        return {
          ...prevSession,
          messages: [...prevSession.messages, newChatMessage],
        };
      });
      setChatSessions((prevSessions: ChatSession[]) =>
        prevSessions.map((session) =>
          session.id === newChatSession.id
            ? {
              ...session,
              messages: [...session.messages, newChatMessage],
            }
            : session
        )
      );
    }

    // envoyer le message au backend
    await fetch("/api/chatMessage/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newChatMessage),
    });

    try {
      setIsResponseLoading(true);

      const response = await fetch("http://localhost:80/chat", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Session-Id": newChatSession === null ? newSession.id : newChatSession.id
        },
        body: JSON.stringify({ content: inputValue }),
      });

      const responseData = await response.json();

      setNewChatSession((prevSession: ChatSession | null) => {
        if (!prevSession) return null;
        return {
          ...prevSession,
          messages: [
            ...prevSession.messages,
            {
              id: createId(),
              message: responseData.content,
              role: "assistant",
              createdAt: new Date().toISOString(),
              chatSessionId: prevSession.id,
            },
          ],
        };
      });

      setChatSessions((prevSessions: ChatSession[]) =>
        prevSessions.map((session) =>
          session.id === newChatSession?.id
            ? {
              ...session,
              messages: [
                ...session.messages,
                {
                  id: createId(),
                  message: responseData.content,
                  role: "assistant",
                  createdAt: new Date().toISOString(),
                  chatSessionId: session.id,
                },
              ],
            }
            : session
        )
      );

    } catch (error) {
      console.error("Erreur lors de la réception du message:", error);
      return;
    } finally {
      setIsResponseLoading(false);
    }

    
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="mb-2 items-center flex gap-6 justify-center">
      {/* Contenu de la page d'accueil */}
      <div className="w-full">
        <Input
          placeholder="Posez une question !"
          className=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <Button>
        <img
          src="images/micro_logo.png"
          alt=""
          className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
        />
      </Button>
      <Button onClick={handleSendMessage}>
        <img
          src="images/fleche.png"
          alt=""
          className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
        />{" "}
      </Button>
    </div>
  );
};

export default Askbar;

// quand j'envoie un message
// si pas de chatSession :
// - créer une nouvelle session
// - update chatSession avec la nouvelle session
// - envoyer le message au backend
// (- ajouter à la session le message envoyé ? ou récupérer depuis la database ?)
// si chatSession :
// - envoyer le message au backend
// - ajouter à la session le message envoyé ? ou récupérer depuis la database ?
