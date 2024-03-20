"use client";
import { IconHome, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Journey",
      link: "/journey",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Blog",
      link: "https://blog.yesidlopez.de",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
