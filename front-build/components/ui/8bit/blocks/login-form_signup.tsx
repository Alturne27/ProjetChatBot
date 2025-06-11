import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import { Checkbox } from "@/components/ui/8bit/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";

export function LoginFormSignup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",
      }}
    >
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="bg-background-site">
          <CardHeader>
            <CardTitle className="text-2xl">Inscription</CardTitle>
            <p className="font-text text-white">
              Entrez une adresse e-mail pour créer un compte
            </p>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <Label htmlFor="password">Mot de passe</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <Label htmlFor="password">Confirmez le mot de passe</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex items-center gap-5">
                  <Checkbox />
                  Acceptez les{" "}
                  <a
                    href="/conditions-utilisation"
                    className="underline underline-offset-4"
                  >
                    conditons d'utilisation
                  </a>
                </div>
                <Button type="submit" className="w-full">
                  Creez un compte
                </Button>
              </div>
              <br />
              <div className="mt-4 text-center text-xs">
                Vous avez déjà un compte ?{" "}
                <a href="/connexion" className="underline underline-offset-4">
                  Se connecter
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
