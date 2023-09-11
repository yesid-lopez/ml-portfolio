import React from "react";
import { FooterItemType } from "@/types/footer";

export default function Footer() {
  const sections: FooterItemType[] = [
    { title: "Github", url: "https://github.com/yesid-lopez" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/yesid-lopez-sierra/" },
    { title: "Instagram", url: "https://www.instagram.com/yesid.lopez/" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Yesid López
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {sections.map((section) => (
          <FooterItem
            key={section.title}
            title={section.title}
            href={section.url}
          />
        ))}
      </ul>
    </footer>
  );
}

const FooterItem = ({ title, href = "#" }: { title: string; href: string }) => (
  <li>
    <a href={href} className="mr-4 hover:underline md:mr-6">
      {title}
    </a>
  </li>
);
