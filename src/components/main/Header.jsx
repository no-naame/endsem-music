import React from 'react';
import { Button } from "@/components/ui/button.tsx"
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header className="flex bg-[#0e0e0e] items-center justify-between p-4 text-white">
            <div className="flex items-center space-x-4">
                <Link to="/"><MusicIcon className="h-8 w-8 text-red-600"/></Link>
                <Link to="/"><h1 className="text-3xl font-extralight">Musica</h1></Link>
            </div>
            <Link to="/login">
                <Button className="text-white" variant="ghost">
                Login
                </Button>
            </Link>
        </header>
    );
};
function MusicIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}
export default Header;