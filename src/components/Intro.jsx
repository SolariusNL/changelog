import Link from "next/link";

import { IconLink } from "@/components/IconLink";
import { Title } from "@/components/Title";
import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Title className="inline-block w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Powering imagination
        <br />
        <span className="bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
          with open source innovation
        </span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-200">
        Framework is a modern, free and open source game platform alternative to
        Roblox, with power comparable to Unity or Unreal Engine. It is designed
        to be easy to use, and to allow for rapid development of games, worlds
        and experiences to share with the world.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://framework.solarius.me"
          icon={HiOutlineArrowRight}
          className="flex-none"
        >
          Go to Framework
        </IconLink>
        <IconLink
          href="https://wiki.solarius.me"
          icon={HiOutlineBookOpen}
          className="flex-none"
        >
          Documentation
        </IconLink>
      </div>
    </>
  );
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Created by{" "}
      <IconLink
        href="https://solarius.me"
        compact
        icon={HiOutlineInformationCircle}
      >
        Solarius B.V.
      </IconLink>
    </p>
  );
}
