import sanityClient from "@/lib/sanity.client";
import { ProjectType } from "@/types/project";

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: ProjectType }) {
  const coverProps = useNextSanityImage(sanityClient, project.cover);

  return (
    <div className="flex flex-col border">
      <div className="flex justify-center">
        <Image alt="" src={coverProps.src} width={500} height={500} />
      </div>
      <div className="px-3">
        <p className="font-bold text-left">{project.title}</p>
        <p className="font-light">{project.description}</p>
        <Link href={project.url}>
          <button className="rounded-full bg-blue-500 px-3 p-1 font-light text-white">
            open project
          </button>
        </Link>
      </div>
    </div>
  );
}
