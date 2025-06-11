import React, { useEffect, useState } from "react";
import MessageIA from "./MessageIA";
import MessageUser from "./MessageUser";

interface ChatHistoryProps {
  session: ChatSession;
  isResponseLoading: boolean;
}

const ChatHistory = ({ session, isResponseLoading }: ChatHistoryProps) => {
  return (
    <div>
      {session.messages.map((message) => {
        if (message.role === "user") {
          return <MessageUser key={message.id} message={message.message} />;
        } else if (message.role === "assistant") {
          return <MessageIA key={message.id} message={message.message} />;
        }
      })}
      {isResponseLoading && (
        <div className="flex flex-row gap-5 justify-start items-center my-3 text-lg w-[90%]">
          <img src="/images/logo-couleur.png" alt="" className="size-10" />
          <div className="flex flex-row  gap-3">
            <p className="text-white/50 italic">En attente de la réponse...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHistory;
