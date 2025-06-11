import React from "react";
import * as THREE from "three"; // essentiel pour utiliser des objets de la bibliothèque three.js avec primitive

// primitive : permet d'utiliser des objets de la bibliothèque three.js qui ne sont pas simplifié dans react-three-fiber

const ChatbotLights = () => {
  return (
    <>
      <ambientLight intensity={3} color="#ffffff" />
      {/*
      <spotLight
        position={[3, 5, 6]}
        intensity={100}
        angle={1.1}
        penumbra={0.15}
        color={"white"}
      />
      <spotLight
        position={[6, 0, 6]}
        intensity={75}
        angle={1.1}
        penumbra={0.15}
        color={"white"}
      />
      <spotLight
        position={[-3, 5, -6]}
        intensity={100}
        angle={1.1}
        penumbra={0.15}
        color={"white"}
      />
      <spotLight
        position={[-6, 0, -6]}
        intensity={75}
        angle={1.1}
        penumbra={0.15}
        color={"white"}
      /> */}
    </>
  );
};

export default ChatbotLights;
