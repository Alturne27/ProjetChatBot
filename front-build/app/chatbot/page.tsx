"use client";
import { SessionProvider, useSession } from "next-auth/react";
import Sidebar from "@/components/ui/custom/Sidebar";
import Askbar from "@/components/ui/custom/askbar";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MessageUser from "@/components/ui/custom/MessageUser";
import MessageIA from "@/components/ui/custom/MessageIA";
import ChatHistory from "@/components/ui/custom/ChatHistory";
import SignIn from "@/components/auth/sign-in";
import Loading from "@/components/ui/custom/Loading";
import { signOut } from "next-auth/react";

export default function Home() {
  const [isPanelVisible, setPanelVisible] = useState(true);
  const sideBarMobileRef = useRef<HTMLDivElement>(null);
  const mainPageRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();
  const [isResponseLoading, setIsResponseLoading] = useState(false);

  const [newChatSession, setNewChatSession] = useState<ChatSession | null>(
    null
  );
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);

  useGSAP(() => {
    if (sideBarMobileRef) {
      if (isPanelVisible) {
        gsap.to(sideBarMobileRef.current, {
          left: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(sideBarMobileRef.current, {
          left: -300,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  }, [isPanelVisible]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <p className="text-2xl text-white font-title">
          Veuillez vous connecter pour accéder au chatbot.
        </p>
        <SessionProvider>
          <SignIn />
        </SessionProvider>
      </div>
    );
  }
  return (
    <div className="flex">
      <div className="absolute z-50 " ref={sideBarMobileRef}>
        <Sidebar
          isPanelVisible={isPanelVisible}
          setPanelVisible={setPanelVisible}
          setNewChatSession={setNewChatSession}
          newChatSession={newChatSession}
          setChatSessions={setChatSessions}
          chatSessions={chatSessions}
        />
      </div>

      <main
        ref={mainPageRef}
        className="main-page flex-1 bg-white h-screen justify-center flex flex-col"
      >
        <div
          className="absolute top-0 left-0 justify-between items-center w-full p-5 transition-all duration-200 flex-shrink-0 bg-transparent"
          style={{ opacity: isPanelVisible ? 0 : 1 }}
        >
          <img
            src="images/menu_ouvrir.png"
            alt=""
            className="w-8 h-8 cursor-pointer"
            onClick={() => {
              setPanelVisible(!isPanelVisible);
            }}
          />
        </div>
        <div
          title="Déconnexion"
          className="absolute top-0 right-0 flex justify-end items-center p-5 bg-transparent"
          onClick={() => signOut({ redirectTo: "/" })}
        >
          <img
            src="images/logout.png"
            alt=""
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        {newChatSession === null ? (
          <div className="flex items-center justify-center h-20 px-5 lg:p-0 ">
            <p className="text-white text-xl font-title text-center ">
              Bienvenue dans votre nouveau chat!
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-scroll px-4">
            <div className="max-w-4xl mx-auto space-y-4 py-4">
              <ChatHistory
                session={newChatSession}
                isResponseLoading={isResponseLoading}
              />
            </div>
          </div>
        )}

        <div className="flex-shrink-0 max-w-4xl mx-auto w-full px-4 pb-4">
          <SessionProvider>
            <Askbar
              newChatSession={newChatSession}
              setNewChatSession={setNewChatSession}
              setChatSessions={setChatSessions}
              setIsResponseLoading={setIsResponseLoading}
            />
          </SessionProvider>
        </div>
      </main>
    </div>
  );
}
