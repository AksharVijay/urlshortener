import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link2, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const user = true;

  return (
    <div>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="h-16" alt="url_shortener_logo" />
        </Link>
        <div>
          {!user ? (
            <Button onClick={() => navigate("/auth")}>Login</Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Akshar Vijay</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link2  className="mr-2 w-4 h-4" /> My Links</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 w-4 h-4 text-red-500"/>
                    <span>
                    Logout
                    </span>

                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
