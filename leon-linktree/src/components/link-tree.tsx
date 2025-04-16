import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export interface LinkItem {
  title: string;
  url: string;
  icon?: string;
}

interface LinkTreeProps {
  name: string;
  avatar?: string;
  bio?: React.ReactNode;
  links: LinkItem[];
}

export function LinkTree({ name, avatar, bio, links }: LinkTreeProps) {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3">
        {avatar && (
           <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary ring-2 ring-purple-500/50 shadow-lg">
           <Image
             src={avatar}
             alt={name}
             width={96}
             height={96}
             className="object-cover w-full h-full"
             priority
           />
         </div>
        )}
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {name}
        </h1>
        {bio && <p className="text-center font-thin text-md text-white ">{bio}</p>}
      </div>

      {/* Links Section */}
      <div className="w-full flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full justify-center py-6 bg-card hover:bg-card/80 border-primary/20"
            >
              {link.icon && (
                <Image
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}
              {link.title}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}
