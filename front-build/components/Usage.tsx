"use client";
import React from "react";
import GradientText from "./ui/reactbits/TextAnimations/GradientText/GradientText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Usage = () => {
  const usage1Ref = React.useRef<HTMLDivElement>(null);
  const usage2Ref = React.useRef<HTMLDivElement>(null);
  const icon1Ref = React.useRef<HTMLImageElement>(null);
  const icon2Ref = React.useRef<HTMLImageElement>(null);
  const image1Ref = React.useRef<HTMLImageElement>(null);
  const image2Ref = React.useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const scannerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".usage-zone",
        start: window.innerWidth > 1200 ? "top top" : "top top+=200",
        pin: true,
        pinSpacing: true,
        toggleActions: "play none reverse none",
      },
    });
    // Canette remise au milieu (après le flottement)
    if (
      usage1Ref.current &&
      usage2Ref.current &&
      icon1Ref.current &&
      icon2Ref.current
    ) {
      scannerAnimation.to(
        usage1Ref.current,
        {
          y: 50,
          opacity: 0,
          ease: "power2.inOut",
        },
        1
      );
      // Rotation de la canette
      scannerAnimation.fromTo(
        usage2Ref.current,
        {
          y: 50,
          opacity: 0,
          ease: "power2.inOut",
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.inOut",
        },
        ">"
      );

      scannerAnimation.to(
        image1Ref.current,
        {
          y: 50,
          opacity: 0,
          ease: "power2.inOut",
        },
        1
      );
      // Rotation de la canette
      scannerAnimation.fromTo(
        image2Ref.current,
        {
          y: 50,
          opacity: 0,
          ease: "power2.inOut",
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.inOut",
        },
        ">"
      );
      // Rotation de la canette
      scannerAnimation.to(
        icon1Ref.current,
        {
          scale: 0.5,
          ease: "power2.inOut",
        },
        1
      );

      scannerAnimation.to(
        icon2Ref.current,
        {
          scale: 2,
          ease: "power2.inOut",
        },
        ">"
      );
    }
  });
  return (
    <div className="usage-zone h-dvh md:h-dvh px-3 py-10 lg:p-10 ">
      <div id="usage">
        <GradientText
          colors={["#3D70C8", "#B82A38", "#3D70C8", "#B82A38", "#3D70C8"]}
          animationSpeed={10}
          showBorder={false}
        >
          <h2>Usage</h2>
        </GradientText>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-between xl:px-20 items-center gap-10 xl:gap-20">
        <div className="flex flex-row justify-between items-center gap-5 xl:gap-30 sm:gap-15 max-w-full p-5">
          <div className="flex flex-col justify-center items-center gap-10">
            <div
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
              ref={icon1Ref}
            >
              <img src="/images/keskece.png" alt="" />
            </div>
            <div
              className="lg:w-[50px] lg:h-[50px] w-[25px] h-[25px]"
              ref={icon2Ref}
            >
              <img src="/images/keskece.png" alt="" className="" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-start container md:gap-10">
            <div className="relative">
              <div className="relative z-10" ref={usage1Ref}>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-5 lg:mb-10">
                  Un point d'entrée vers vos données  
                </h3>
                <p className="text-white text-sm md:text-xl">
                  Une interface intelligente pour accéder rapidement à vos données. Pas besoin de chercher dans toute la documentation.
                </p>
              </div>
              <div
                className="usage-2 absolute top-0 left-0 z-0 opacity-30"
                ref={usage2Ref}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 lg:mb-10">
                  Une source de conseil en prévention numérique
                </h3>
                <p className="text-white text-sm md:text-xl">
                  L'IA ne fais pas que répondre à vos questions. Elle vous guide, vous conseille et vous oriente dans les bonnes pratiques de sécurité numérique.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[40%]">
          <div className="relative z-10" ref={image1Ref}>
            <img
              src="https://itsocial.fr/wp-content/uploads/2019/05/iStock-1031924616.jpg"
              alt=""
              className="object-cover w-[100%]"
            />
          </div>
          <div
            className="absolute top-0 left-0 z-0 opacity-30 lg:w-[100%]"
            ref={image2Ref}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/10541/10541286.png"
              alt=""
              className="object-cover w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
