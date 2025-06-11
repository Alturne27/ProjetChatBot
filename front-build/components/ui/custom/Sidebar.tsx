"use client";

import SideChat from "@/components/ui/custom/sidechat";
import { forwardRef, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface SidebarProps {
  isPanelVisible: boolean;
  setPanelVisible: (visible: boolean) => void;
  setNewChatSession: (newSession: ChatSession | null) => void;
  newChatSession: ChatSession | null;
  setChatSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>;
  chatSessions: ChatSession[];
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      isPanelVisible,
      setPanelVisible,
      newChatSession,
      setNewChatSession,
      setChatSessions,
      chatSessions,
    }: SidebarProps,
    ref
  ) => {
    const { data: session } = useSession();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchSessions = async () => {
        try {
          const res = await fetch(
            `/api/chatSession/findAll/${session?.user?.id}/`
          );
          const data = await res.json();
          setChatSessions(data);
        } catch (err) {
          console.error("Error loading sessions", err);
        } finally {
          setLoading(false);
        }
      };

      fetchSessions();
    }, []);

    return (
      <div ref={ref} className="">
        <aside className="top-0 left-0 flex flex-col justify-between w-[300px] bg-[#020202] min-h-screen p-1 text-white">
          <img
            src="/images/sidebar_background.png"
            alt=""
            className="absolute top-0 left-0 z-1 w-[300px]"
          />
          <div className="z-5 flex flex-col gap-10">
            <div className="flex items-center gap-2 p-4 justify-between">
              <a href="/">
                <img src="images/logo-white.png" alt="" />
              </a>

              <img
                src="images/menu_cacher.png"
                alt=""
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  setPanelVisible(!isPanelVisible);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="text-xl leading-10 text-white flex items-center px-4 py-2 gap-3 hover:bg-gray-500/30 rounded-2xl transition-bg duration-200"
                onClick={() => setNewChatSession(null)}
              >
                <img src="images/home.png" alt="" className="w-10 h-10" />
                Nouveau Chat
              </button>
              <hr className="mx-4 border-t-5 border-white fill-white my-4" />
              <div className="overflow-y-auto max-h-150 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                {loading ? (
                  <div className="flex items-center justify-center h-20">
                    <p className="text-white">Chargement des sessions...</p>
                  </div>
                ) : (
                  chatSessions.map((s) => (
                    <SideChat
                      key={s.id}
                      newChatSession={newChatSession}
                      setChatSessions={setChatSessions}
                      chatSessions={chatSessions}
                      session={s}
                      onClickEvent={setNewChatSession}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 mb-2">
            {session?.user?.image && (
              <img
                src={session?.user?.image}
                alt=""
                className="w-[50px] h-[50px] rounded-4xl"
              />
            )}
            {!session?.user?.name && (
              <img
                src="images/ishaplaceholder.png"
                alt=""
                className="w-[50px] h-[50px] rounded-4xl"
              />
            )}

            <span className="text-white text-base leading-10 text-ellipsis overflow-hidden">
              {session?.user?.email}
            </span>
          </div>
        </aside>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";
export default Sidebar;
