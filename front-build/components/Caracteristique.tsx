"use client";
import React, { useRef } from "react";
import GradientText from "./ui/reactbits/TextAnimations/GradientText/GradientText";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/8bit/card";
import SpotlightCard from "./ui/reactbits/Components/SpotlightCard/SpotlightCard";
import CardCustomBig from "./ui/8bit/CardCustomBig";
import CardCustomSmall from "./ui/8bit/CardCustomSmall";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Caracteristique = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ]; //  array de refs pour les animer une par une
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          repeatRefresh: true,
          opacity: 1,
          duration: 1.5,
          delay: 0.3 * (index + 1),

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <div className="min-h-dvh xl:h-dvh h-dvh py-10 container mx-auto">
      <div className="w-full" id="caracteristique">
        <GradientText
          colors={["#3D70C8", "#B82A38", "#3D70C8", "#B82A38", "#3D70C8"]}
          animationSpeed={10}
          showBorder={false}
        >
          <h2>Caractéristiques</h2>
        </GradientText>
      </div>

      <div
        ref={sectionRef}
        className="grid xl:grid-cols-2 gap-10 lg:gap-20 p-5 lg:py-20 max-h-full"
      >
        <CardCustomBig
          ref={project1Ref}
          image="https://lexpress-education.com/wp-content/uploads/2024/09/Photo-campus-INSA-Hauts-de-France.png"
        >
          Notre IA a été concue et entrainée via la documentation de l'INSA
          fourni et trouvé afin de pouvoir répondre aux mieux aux questions
          posées par les étudiants de l'INSA.
        </CardCustomBig>
        <CardCustomSmall
          ref={project2Ref}
          image="images/photo_groupe_locale.jpg"
          title="Une IA Locale"
        >
          L'IA tourne en local. Aucun envoie de données à quiconque est donc
          réalisé.
        </CardCustomSmall>
        <CardCustomSmall
          ref={project3Ref}
          image="https://faddom.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/11/it-documentation-examples-and-best-practices.jpg.webp"
          title="Une IA Locale"
        >
          L'IA a été entrainée avec comme base les différentes requêtes
          fréquentes des étudiants de l'INSA.
        </CardCustomSmall>
      </div>
    </div>
  );
};

export default Caracteristique;
