import Link from "next/link";
import { Button } from "./ui/button";
import { Sprout } from "lucide-react";

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop:blur supports-backdrop-filter:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* logo */}
        <Link
          href={"/"}
          className="text-xl font-bold text-primary font-mono tracking-wider"
        >
          Plantventory
        </Link>
      </div>

      {/* navbar components */}
      <div className="hidden md:flex items-center space-x-4">
        <Button variant={"ghost"} className="flex items-center gap-2" asChild>
          <Link href={"/plants"}>
            <Sprout className="w-4 h-4" />
            <span className="hidden lg-inline">Planto</span>
          </Link>
        </Button>

        <Button variant={"ghost"} className="flex items-center gap-2" asChild>
          <Link href={"/"}>
            <Sprout className="w-4 h-4" />
            <span className="hidden lg-inline">Planto</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
