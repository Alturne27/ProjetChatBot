import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";

export function LoginForm({
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
            <CardTitle className="text-2xl">Login</CardTitle>
            <p className=" font-text text-white">
              Saisissez votre adresse e-mail et mot de passe pour vous connecter
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
                    placeholder="exemple@uphf.fr"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <Label htmlFor="password">Mot de passe</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-xs">
                Pas de compte ?{" "}
                <a href="/inscription" className="underline underline-offset-4">
                  Inscription
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
