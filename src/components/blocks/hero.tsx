import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Plus } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaLink?: string;
  navLink?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

const Hero = ({
  title = "Next-level IT, limitless potential—let's build together",
  subtitle = "Transform your business with advanced IT solutions—automate workflows, enhance security, and stay effortlessly connected.",
  ctaLink = "/demo",
  stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "20+", label: "Active Company Clients" },
    { value: "100+", label: "Projects Completed" },
    { value: "10,000+", label: "Hours of Support" },
  ],
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden h-auto min-h-screen">
      <div className="container relative z-10 flex flex-col items-center h-full pt-36">
        <div className="flex flex-col items-center w-full max-w-screen-xl py-6">
          <div className="relative flex flex-col items-center gap-4 w-full">
            <h1 className="w-full max-w-screen-lg text-balance text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-tl from-zinc-900 via-zinc-700 to-zinc-400 dark:from-primary-foreground dark:via-slate-300/80 dark:to-white/80 bg-clip-text text-transparent py-2">
              {title}
            </h1>
            <p className="w-full max-w-screen-lg text-balance text-md md:text-2xl text-center text-muted-foreground">
              {subtitle}
            </p>
            <div className="flex flex-col items-center gap-3 pt-3">
              <Button size="lg" asChild>
                <Link href={ctaLink} className="group">
                  Request a demo
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full max-w-screen-xl my-23">
          <div className="relative z-10 flex flex-col items-center bg-gradient-to-t from-secondary to-background dark:from-card dark:to-background p-8 max-w-lg lg:w-7xl border dark:border-border">
            <Plus
              size={24}
              className="text-muted-foreground/30 absolute -top-3 -left-3"
            />
            <Plus
              size={24}
              className="text-muted-foreground/30 absolute -bottom-3 -left-3"
            />
            <Plus
              size={24}
              className="text-muted-foreground/30 absolute -top-3 -right-3"
            />
            <Plus
              size={24}
              className="text-muted-foreground/30 absolute -bottom-3 -right-3"
            />
            <div className="grid grid-cols-2 gap-8 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <h3 className="text-4xl lg:text-5xl font-semibold mb-1 bg-gradient-to-tl from-foreground via-foreground/80 to-foreground/60 dark:from-primary-foreground dark:via-slate-300/80 dark:to-white/80 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground lg:text-md">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        width={64}
        height={64}
        strokeDasharray={2}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-0 w-full h-full"
        )}
      />
    </section>
  );
};

export { Hero };

/*
export default function Hero() {
  const arrowRef = useRef<ArrowRightIconHandle>(null);

  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="relative py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
              <Link
                href="/"
                className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
              >
                <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                  New
                </span>
                <span className="text-sm">Introduction Tailus UI Html</span>
                <span className="bg-(--color-border) block h-4 w-px"></span>
              </Link>

              <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
                Tame the Wild West <br /> of Frontend Development
              </h1>
              <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                Tailwindcss highly customizable components for building modern
                websites and applications that look and feel the way you mean
                it.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                Highly customizable components for building modern websites and
                applications, with your personal spark.
              </p>

              <div className="mt-8">
                <Button
                  variant="default"
                  size="lg"
                  onMouseEnter={() => arrowRef.current?.startAnimation()}
                  onMouseLeave={() => arrowRef.current?.stopAnimation()}
                >
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deploy now
                    <ArrowRightIcon ref={arrowRef} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
*/
