"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const visible = true;

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        aria-label="Primary navigation"
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-white/[0.2] bg-black px-8 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {navItems.map((navItem) => {
          const isExternal = navItem.link.startsWith("http");
          const className = cn(
            "relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          );
          const content = (
            <>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </>
          );

          return isExternal ? (
            <a
              key={navItem.link}
              href={navItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <Link key={navItem.link} href={navItem.link} className={className}>
              {content}
            </Link>
          );
        })}
      </motion.nav>
    </AnimatePresence>
  );
};
