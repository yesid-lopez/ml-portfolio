"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavbarItemType } from "../types/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections: NavbarItemType[] = [
    { title: "Journey", url: "/journey" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Blog", url: "https://blog.yesidlopez.de/" },
  ];

  return (
    <nav className="bg-black p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <a href="/">Yesid López</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {sections.map((section) => (
                <NavbarItem
                  key={section.title}
                  title={section.title}
                  href={section.url}
                />
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              {sections.map((section) => (
                <NavbarItem
                  key={section.title}
                  title={section.title}
                  href={section.url}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

const NavbarItem = ({ title, href = "#" }: { title: string; href: string }) => (
  <li>
    <a href={href} className="text-white hover:text-gray-300">
      {title}
    </a>
  </li>
);
