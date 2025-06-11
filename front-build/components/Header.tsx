"use client";
import { useWindowScroll } from "react-use";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/8bit/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SignIn from "@/components/auth/sign-in";
import { SessionProvider } from "next-auth/react";

gsap.registerPlugin(ScrollToPlugin);

interface HeaderProps {
  accueil?: boolean;
}

const Header = ({ accueil = true }: HeaderProps) => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  // Si on est en haut : affiche navbar sans fond noir
  // Si on descend : cache navbar
  // Si on remonte, mais qu'on est pas en haut : affiche navbar avec fond noir
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      if (navContainerRef.current) {
        navContainerRef.current.classList.remove("header-background");
      }
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      if (navContainerRef.current) {
        navContainerRef.current.classList.add("header-background");
      }
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      if (navContainerRef.current) {
        navContainerRef.current.classList.add("header-background");
      }
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleScrollTo = (targetId: string) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: targetId, offsetY: 100 },
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="z-50 fixed flex flex-row items-center w-dvw justify-between text-white py-6 px-8 header-background -transition-all duration-700"
      ref={navContainerRef}
    >
      <a href="/">
        <img src="/images/logo-white.png" alt="" />
      </a>

      {accueil && (
        <nav className="">
          <ul className="flex flex-row justify-between gap-20 items-center">
            <li className="hidden md:block ">
              <button
                onClick={() => handleScrollTo("#caracteristique")}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Caractéristiques
              </button>
            </li>
            <li className="hidden md:block ">
              <button
                onClick={() => handleScrollTo("#usage")}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Usage
              </button>
            </li>
            <li className="hidden md:block ">
              <button
                onClick={() => handleScrollTo("#faq")}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </li>
            <li>
              <SessionProvider>
                <SignIn />
              </SessionProvider>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
