"use client";

import Link from "next/link";
import { ModeToggle } from "../ui/theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { FingerprintIcon } from "../ui/fingerprint";
import { LinkIcon } from "../ui/animated-link";

interface Feature {
  title: string;
  description: string;
}

interface FeatureProps {
  heading?: string;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
  feature5?: Feature;
  feature6?: Feature;
}

const Feature = ({
  heading = "What do we offer?",
  description = "Everything you need to empower your place with reliable and adaptive solutions.",
  feature5 = {
    title: "Managing your workflow",
    description:
      "Boost your workflow and upgrade your business with management systems and software solutions.",
  },
  feature2 = {
    title: "Securing your place",
    description:
      "Boost security measures with CCTV, biometrics like VMS, and fire detection alarm system (FDAS).",
  },
  feature3 = {
    title: "Reducing Cyber Attacks",
    description:
      "Secure your files and systems with firewall and anti-virus protection, with real-time threat detection and support.",
  },
  feature4 = {
    title: "Making communications better",
    description:
      "Ensure effortless coordination with advanced PABX and public address systems, designed to optimize workflow and enhance clarity.",
  },
  feature1 = {
    title: "Hardware & Integration",
    description:
      "We provide a comprehensive range of hardware solutions, including servers, UPS systems, and solar technology, all designed to strengthen and future-proof your IT infrastructure.",
  },
  feature6 = {
    title: "Boosting connectivity",
    description:
      "Enhance your network infrastructure to achieve seamless performance, superior reliability, and optimized efficiency across all operations.",
  },
}: FeatureProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-32 border-y">
      <div className="container items-center justify-items-left mx-auto">
        <div className="mb-24 flex flex-row items-center gap-6">
          <Image
            src={theme === "dark" ? "/feature-dark.svg" : "/feature.svg"}
            alt="Feature"
            height={180}
            width={180}
            className="absolute opacity-40"
          />
          <div className="flex flex-col z-10">
            <div className="flex flex-row items-end gap-2">
              <h1 className="text-left text-3xl font-bold lg:max-w-3xl lg:text-5xl bg-gradient-to-tl from-foreground via-foreground/80 to-foreground/60 dark:from-primary-foreground dark:via-slate-300/80 dark:to-white/80 bg-clip-text text-transparent">
                {heading}
              </h1>
              <Link href="/services">
                <LinkIcon
                  size={20}
                  className="text-primary/60 dark:text-primary-foreground/60"
                />
              </Link>
            </div>
            <p className="text-left text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row overflow-hidden">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <div className="flex flex-row pb-2 gap-4">
                  <Badge className="bg-blue-300/20 text-blue-700/80 text-sm dark:bg-blue-300/20 dark:text-blue-300/80">
                    Servers
                  </Badge>
                  <Badge className="bg-emerald-300/20 text-emerald-700/80 text-sm dark:bg-emerald-300/10 dark:text-emerald-300/80">
                    Computers
                  </Badge>
                  <Badge className="bg-red-300/20 text-red-700/80 text-sm dark:bg-red-300/10 dark:text-red-300/80">
                    NAS
                  </Badge>
                  <Badge className="bg-yellow-300/20 text-yellow-600/80 text-sm dark:bg-yellow-300/10 dark:text-yellow-300/80">
                    Solar Power
                  </Badge>
                  <Badge className="bg-violet-300/20 text-violet-700/80 text-sm dark:bg-violet-300/10 dark:text-violet-300/80">
                    Printers
                  </Badge>
                </div>
                <h2 className="text-xl font-semibold opacity-80">
                  {feature1.title}
                </h2>
                <p className="text-muted-foreground">{feature1.description}</p>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5 overflow-hidden">
                <div className="absolute -right-2 -top-2 mx-auto flex aspect-square size-32 rounded-full border border-primary/60 before:absolute before:-inset-14 before:rounded-full before:border before:border-primary/30 after:absolute after:-inset-35 after:rounded-full after:border after:border-primary/20 dark:border-border dark:before:border-border dark:after:border-border">
                  <FingerprintIcon />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{feature2.title}</h2>
                  <p className="text-muted-foreground w-sm">
                    {feature2.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{feature3.title}</h2>
                <p className="text-muted-foreground">{feature3.description}</p>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">{feature4.title}</h2>
                <p className="text-muted-foreground">{feature4.description}</p>
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{feature5.title}</h2>
                <p className="text-muted-foreground">{feature5.description}</p>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">{feature6.title}</h2>
                <p className="text-muted-foreground">{feature6.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 mx-auto container py-8">
        <span>DBL ISTS Inc. 2025</span>
        <ModeToggle />
      </div>
    </section>
  );
};

export { Feature };
