"use client";

import Aurora from "@/components/ui/reactbits/Backgrounds/Aurora/Aurora";
import { Button } from "./ui/8bit/button";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ChatbotExperience from "./model/ChatbotExperience";
import SignIn from "./auth/sign-in";
import { SessionProvider } from "next-auth/react";

const Accueil = () => {
  const words = [
    { text: "étudiants" },
    { text: "enseignants" },
    { text: "chercheurs" },
  ];

  const containerRef = useRef(null);
  useGSAP(() => {
    const titleAnimation = gsap.fromTo(
      ".accueil-left-text h1",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        rotationZ: 0,
        stagger: 0.3,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="h-dvh overflow-clip">
      <div
        className="z-0 absolute h-full"
        style={{ height: "100%", width: "100%" }}
      >
        <Aurora
          colorStops={["#032E69", "#3D70C8", "#B82A38"]}
          blend={0.8}
          amplitude={0.5}
          speed={2}
        />
      </div>
      <div className="z-1 absolute w-full flex flex-col-reverse gap-0 xl:gap-5 2xl:flex-row items-center justify-evenly 2xl:justify-between py-[70px] h-dvh 2xl:pl-[10%]">
        <div
          className="accueil-left z-1 flex flex-col items-center 2xl:items-start justify-center gap-10"
          ref={containerRef}
        >
          <div className="accueil-left-text flex flex-col items-center 2xl:items-start justify-center text-white text-6xl overflow-hidden">
            <h1>Une IA qui met le</h1>
            <h1>
              <span>numérique</span>
            </h1>
            <h1>au service des</h1>
            <h1 className="accueil-left-text-slide text-center">
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span key={word.text}>
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>

          <SessionProvider>
            <SignIn />
          </SessionProvider>
        </div>
        <figure className=" w-[80%] h-full">
          <ChatbotExperience />
        </figure>
      </div>
    </div>
  );
};

export default Accueil;
