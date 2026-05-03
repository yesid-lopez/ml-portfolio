"use client";
import { IconBriefcase, IconBrandLinkedin, IconHome, IconMapPin } from "@tabler/icons-react";
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
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yesid-lopez/",
      icon: <IconBrandLinkedin className="h-4 w-4 text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
