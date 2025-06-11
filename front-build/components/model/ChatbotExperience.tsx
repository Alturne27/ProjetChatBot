import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Chatbot } from "./Chatbot";
import ChatbotLights from "./ChatbotLights";
import * as THREE from "three";

//fov : field of view
// POLAR ANGLE = part du haut
// savoir si on est sur tablette ou pas : npm install react-responsive, puis query
// convertir un glb en jsx : npx gltfjsx .\fichier.glb -t
// avec typsecript c'est un peu relou
// renommer le const exporté dans le fichier transformé, et les chemins vers le fichier glb original
// group pour le scale et la position

const ChatbotExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1280px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      className="w-[70%] h-full"
      camera={{ position: [10, 10, 0], fov: 45 }}
    >
      <ChatbotLights></ChatbotLights>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]} // Point vers lequel la caméra regarde
      />
      <group
        scale={isTablet ? 0.45 : 0.6}
        position={[0, isTablet ? -3 : -4.5, 0]}
        rotation={[0, 0, 0]}
      >
        <Chatbot />
      </group>
    </Canvas>
  );
};

export default ChatbotExperience;
