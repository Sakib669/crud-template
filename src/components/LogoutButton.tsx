import { Link, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";

interface Props {}

const LogoutButton = ({}: Props) => {
  return (
    <Button variant="ghost" className="flex items-center gap-2" asChild>
  <Link href="/api/logout">
    <LogOutIcon className="w-4 h-4" />
    <span className="hidden lg:inline">Logout</span>
  </Link>
</Button>
  );
};

export default LogoutButton;
