import Image from "next/image";
import { Button } from "@/components/ui/8bit/button";
import { LoginForm } from "@/components/ui/8bit/blocks/login-form";
import { Card } from "@/components/ui/8bit/card";
import { CardContent } from "@/components/ui/card";
import Accueil from "@/components/Accueil";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Caracteristique from "@/components/Caracteristique";
import Usage from "@/components/Usage";
import FAQ from "@/components/FAQ";
import LenisScrollProvider from "./lenis-provider";

export default function Home() {
  return (
    <LenisScrollProvider>
      <div>
        <Header />
        <Accueil />
        <Caracteristique />
        <Usage />
        <FAQ />
        <Footer />
      </div>
    </LenisScrollProvider>
  );
}
