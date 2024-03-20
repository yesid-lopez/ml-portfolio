"use client";
import {
  IconBriefcase,
  IconFileText,
  IconHome,
  IconMapPin,
} from "@tabler/icons-react";
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
      icon: <IconMapPin className="h-4 w-4 text-white" />,
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: <IconBriefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Blog",
      link: "https://blog.yesidlopez.de",
      icon: <IconFileText className="h-4 w-4 text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
