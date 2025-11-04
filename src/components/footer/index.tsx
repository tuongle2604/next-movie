import Image from "next/image";
import Favicon from "public/favicon.svg";
import IconLinkedin from "@/components/icons/linkedin";
import IconGithub from "@/components/icons/github";
import IconLink from "@/components/icons/link";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-3xl py-10 lg:py-20">
      <div className="m-auto max-w-md text-center">
        <div className="mb-6 flex items-end justify-center gap-3 md:mb-8">
          <Image
            className="h-10 w-10"
            src={Favicon}
            alt="logo"
            width={45}
            height={45}
          />
          <p className="text-2xl font-bold lg:text-3xl">Enhance Movies</p>
        </div>

        <ul className="mb-6 text-sm md:mb-8 [&>li]:mb-3 md:[&>li]:mb-4">
          <li>CAST</li>
          <li className="flex items-center gap-5">
            <span className="basis-1/2 text-right">FRAMEWORK</span>
            <span className="basis-1/2 text-left text-base font-bold">
              Nextjs
            </span>
          </li>
          <li className="flex items-center gap-5">
            <span className="basis-1/2 text-right">DEPLOYMENT</span>
            <span className="basis-1/2 text-left text-base font-bold">
              Begin
            </span>
          </li>
          <li className="flex items-center gap-5">
            <span className="basis-1/2 text-right">DATA</span>
            <span className="basis-1/2 text-left text-base font-bold">
              The Movie DB
            </span>
          </li>
        </ul>

        <ul className="mb-6 text-sm md:mb-8 [&>li]:mb-3 md:[&>li]:mb-4">
          <li>CREW</li>
          <li className="flex items-center gap-5">
            <span className="basis-1/2 text-right">WRITER</span>
            <span className="basis-1/2 text-left text-base font-bold">
              HTML
            </span>
          </li>
          <li className="flex items-center gap-5">
            <span className="basis-1/2 text-right">ART DIRECTOR</span>
            <span className="basis-1/2 text-left text-base font-bold">CSS</span>
          </li>
          <li className="flex items-center gap-5">
            <span className="basis-1/2 text-right">STUNT COORDINATOR</span>
            <span className="basis-1/2 text-left text-base font-bold">
              JavaScript
            </span>
          </li>
        </ul>

        <p className="mb-5 text-base">
          Design based on
          <a
            href="https://enhance-movies.com/"
            target="_blank"
            className="font-bold"
          >
            {" "}
            enhance-movies.com
          </a>
        </p>

        <div className="flex justify-center gap-5">
          <Link href={"#"} aria-label="linkedin">
            <IconLinkedin width={30} height={30} />
          </Link>
          <Link
            href="https://github.com/tuongle2604/next-movie"
            target="_blank"
            aria-label="github"
          >
            <IconGithub width={30} height={30} />
          </Link>
          <Link href="#" aria-label="link">
            <IconLink width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
