import React, { useEffect, useState } from "react";

interface SideChatProps {
  session: ChatSession;
  onClickEvent: (newSession: ChatSession | null) => void;
  newChatSession: ChatSession | null;
  setChatSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>;
  chatSessions: ChatSession[];
}

const SideChat = ({
  session,
  onClickEvent,
  newChatSession,
  chatSessions,
  setChatSessions,
}: SideChatProps) => {
  const deleteHandler = async () => {
    if (!confirm("Supprimer cette session ?")) return;

    try {
      const res = await fetch(`/api/chatSession/delete/${session.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        if (newChatSession != null && session.id === newChatSession.id) {
          onClickEvent(null);
        }
        setChatSessions((prevSessions: ChatSession[]) =>
          prevSessions.filter((s: ChatSession) => s.id !== session.id)
        );
      } else {
        console.error("Erreur côté serveur");
      }
    } catch (err) {
      console.error("Erreur côté client", err);
    }
  };
  return (
    <div
      className="group flex items-center gap-1 justify-between hover:bg-gray-500/30 py-0.5 px-3 m-1 rounded-xl transition-bg duration-200"
      onClick={() => onClickEvent(session)}
    >
      <button className="text-white no-underline text-base leading-10 text-ellipsis whitespace-nowrap overflow-hidden">
        {chatSessions.find((s: ChatSession) => s.id === session.id)?.title}
      </button>
      <img
        src="images/POUBELLE.png"
        alt=""
        className="w-[30px] h-[30px] opacity-50 lg:opacity-0 lg:group-hover:opacity-50 transition-opacity duration-200 cursor-pointer"
        onClick={() => deleteHandler()}
      />
    </div>
  );
};

export default SideChat;
