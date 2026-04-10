import Link from "next/link";
import { Button } from "./ui/button";
import { Home, LogIn, LogInIcon, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";

interface Props {}

const Navbar = ({}: Props) => {
  
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
