"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/8bit/button";

export default function SignIn() {
  const { data: session } = useSession();
  const handleSignIn = () => {
    if (session) {
      // If the user is already signed in, redirect to the chatbot page
      window.location.href = "/chatbot";
      return;
    }
    signIn(undefined, { redirectTo: "/chatbot" });
  };

  return <Button onClick={() => handleSignIn()}>Connexion</Button>;
}
