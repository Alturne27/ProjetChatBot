import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit/accordion";
import GradientText from "./ui/reactbits/TextAnimations/GradientText/GradientText";

const FAQ = () => {
  return (
    <div className="h-[85dvh] py-20 md:py-5 px-5 ">
      <div id="faq">
        <GradientText
          colors={["#3D70C8", "#B82A38", "#3D70C8", "#B82A38", "#3D70C8"]}
          animationSpeed={10}
          showBorder={false}
        >
          <h2>FAQ</h2>
        </GradientText>
      </div>
      <div className="flex justify-center flex-col items-center w-full h-full ">
        <Accordion className="max-w-4xl" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger style={{ color: "#FFFFFF" }}>
              Volez vous nos données clients afin de les revendre ?
            </AccordionTrigger>
            <AccordionContent style={{ color: "#FFFFFF" }}>
              <p className="faq-text">Non. L'IA fonctionnant en local, elle n'envoie aucune données à quiconque.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger style={{ color: "#FFFFFF" }}>
              Mes questions sont-elles enregistrées ?
            </AccordionTrigger>
            <AccordionContent style={{ color: "#FFFFFF" }}>
              <p className="faq-text">Si vous possédez un compte, notre IA va enregistré les différentes questions posées localement.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger style={{ color: "#FFFFFF" }}>
              Quelqu'un peut-il voir mes questions ?
            </AccordionTrigger>
            <AccordionContent style={{ color: "#FFFFFF" }}>
              <p className="faq-text">
                Non, personne ne peut voir vos questions. Les questions sont liées à votre compte et sont stockées localement. Il suffira de se déconnecter pour ne plus avoir accès à vos questions.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger style={{ color: "#FFFFFF" }}>
              Comment fonctionne votre IA ?
            </AccordionTrigger>
            <AccordionContent style={{ color: "#FFFFFF" }}>
              <p className="faq-text">
                Notre IA, basé sur le modèle Llama Factory, a été personnalisé lors d'une phase de Fine-Tuning, ainsi que du RAG pour accompagner notre démarche d'apprentissage.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger style={{ color: "#FFFFFF" }}>
              D'où proviennent vos données ?
            </AccordionTrigger>
            <AccordionContent style={{ color: "#FFFFFF" }}>
              <p className="faq-text">
                Nos données proviennent soit de la documentation de l'INSA, soit sont disponilble en ligne. 
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
