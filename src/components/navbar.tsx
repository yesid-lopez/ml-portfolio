"use client";
import { IconHome, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Journey",
      link: "/journey",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
