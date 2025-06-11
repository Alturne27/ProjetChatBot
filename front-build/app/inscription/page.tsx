import Image from "next/image";
import { Button } from "@/components/ui/8bit/button";
import { LoginFormSignup } from "@/components/ui/8bit/blocks/login-form_signup";
import { Card } from "@/components/ui/8bit/card";
import { CardContent } from "@/components/ui/card";
import Accueil from "@/components/Accueil";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Caracteristique from "@/components/Caracteristique";
import Usage from "@/components/Usage";
import FAQ from "@/components/FAQ";
import Aurora from "@/components/ui/reactbits/Backgrounds/Aurora/Aurora";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="absolute h-full w-full">
        <Aurora
          colorStops={["#032E69", "#3D70C8", "#B82A38"]}
          blend={0.7}
          amplitude={0.5}
          speed={2}
        />
      </div>
      <Header accueil={false}></Header>
      <main className="flex flex-col items-center flex-1 justify-center">
        <LoginFormSignup />
      </main>
      <Footer />
    </div>
  );
}
