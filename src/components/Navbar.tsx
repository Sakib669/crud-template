import Link from "next/link";
import { Button } from "./ui/button";
import { Home, LogIn, LogInIcon, LogOutIcon, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { auth } from "@/lib/auth/server";

export const dynamic = 'force-dynamic';

interface Props {}

const Navbar = async ({}: Props) => {
  const { data: session } = await auth.getSession();
  console.log("murgi chor ", session);

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop:blur supports-backdrop-filter:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex items-center">
            <Link
              href={"/"}
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              🌱 Plantventory
            </Link>
          </div>

          {/* navbar components */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={"ghost"}
              className="flex items-center gap-2"
              asChild
            >
              <Link href={"/"}>
                <Home className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            <Button
              variant={"ghost"}
              className="flex items-center gap-2"
              asChild
            >
              <Link href={"/plants"}>
                <Sprout className="w-4 h-4" />
                <span className="hidden lg:inline">Planto</span>
              </Link>
            </Button>

            <ModeToggle />

            {/* sign in button */}
            {!session?.user && (
              <Button
                variant={"ghost"}
                className="flex items-center gap-2"
                asChild
              >
                <Link href={"/auth/sign-in"}>
                  <LogInIcon className="w-4 h-4" />
                  <span className="hidden lg:inline">Sign In</span>
                </Link>
              </Button>
            )}

            {session?.user && (
              <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-gray-900">
                <h1 className="mb-4 text-xl">
                  <span className="font-bold underline">
                    {session.user.name[0]}
                  </span>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
