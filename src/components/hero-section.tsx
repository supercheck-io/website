import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { OptimizedImage } from "@/components/optimized-image";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import FeaturesSection from "@/components/features";
import YouTubeButton from "@/components/youtube-button";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      y: 8,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.15,
        duration: 0.8,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-gray-950 relative text-gray-800 dark:text-gray-100">
        {/* Circuit Board - Light Pattern with Fade */}
        <div
          className="fixed inset-0 z-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
                            repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
                            radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
                            radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
                        `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 50% 45%, #000 50%, rgba(0,0,0,0.6) 75%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 45%, #000 50%, rgba(0,0,0,0.6) 75%, transparent 100%)",
          }}
        />
        {/* Circuit Board - Dark Pattern with Fade */}
        <div
          className="fixed inset-0 z-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(156, 163, 175, 0.15) 19px, rgba(156, 163, 175, 0.15) 20px, transparent 20px, transparent 39px, rgba(156, 163, 175, 0.15) 39px, rgba(156, 163, 175, 0.15) 40px),
                            repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(156, 163, 175, 0.15) 19px, rgba(156, 163, 175, 0.15) 20px, transparent 20px, transparent 39px, rgba(156, 163, 175, 0.15) 39px, rgba(156, 163, 175, 0.15) 40px),
                            radial-gradient(circle at 20px 20px, rgba(209, 213, 219, 0.2) 2px, transparent 2px),
                            radial-gradient(circle at 40px 40px, rgba(209, 213, 219, 0.2) 2px, transparent 2px)
                        `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 50% 45%, #000 50%, rgba(0,0,0,0.6) 75%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 45%, #000 50%, rgba(0,0,0,0.6) 75%, transparent 100%)",
          }}
        />
        <HeroHeader />
        <main className="relative overflow-hidden">
          <section className="relative z-10">
            <div className="relative pt-32 pb-12">
              <div className="mx-auto max-w-6xl px-6 relative z-20">
                <div className="text-center mx-auto max-w-4xl">
                  <AnimatedGroup variants={transitionVariants}>
                    <Link
                      href="https://demo.supercheck.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-2 pl-5 pr-5 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                    >
                      <span className="text-foreground text-base">
                        Checkout Live Demo
                      </span>
                      <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                      <div className="bg-red-600 group-hover:bg-red-700 size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3 text-white" />
                          </span>
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3 text-white" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedGroup>

                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="mt-16 text-balance text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl lg:mt-16"
                  >
                    Automation & Monitoring for Modern Apps
                  </TextEffect>
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="mx-auto mt-8 max-w-3xl text-balance text-xl leading-relaxed text-gray-600 dark:text-gray-300"
                  >
                    Empowering development and SRE teams with a scalable,
                    distributed, and robust platform to drive faster delivery
                    and higher software quality.{" "}
                  </TextEffect>

                  <AnimatedGroup
                    variants={{
                      container: {
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.6,
                          },
                        },
                      },
                      ...transitionVariants,
                    }}
                    className="mt-12 flex flex-row items-center justify-center gap-2 flex-wrap"
                  >
                    <a
                      key={1}
                      href="https://github.com/supercheck-io/supercheck"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200
                        text-white dark:text-gray-900 font-medium text-base
                        rounded-lg border border-gray-800 dark:border-gray-300
                        transition-all duration-200
                        shadow-sm hover:shadow-md
                        px-2 py-3 min-w-[160px] h-[38px] mr-5
                      "
                    >
                      <StarIcon className="size-4" />
                      <span>Star on GitHub</span>
                    </a>
                    <YouTubeButton
                      key={2}
                      url="https://www.youtube.com/@supercheck-io"
                      size="large"
                      className=""
                    />
                  </AnimatedGroup>
                </div>
              </div>

              {/* Supercheck App Preview - Full Width */}
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        delayChildren: 1.2,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      filter: "blur(3px)",
                      y: 12,
                      scale: 0.98,
                    },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        duration: 0.9,
                        ease: "easeOut",
                      },
                    },
                  },
                }}
                className="mt-16 mx-auto max-w-7xl px-8"
              >
                <OptimizedImage
                  src="/supercheck-app.png"
                  alt="Supercheck App - Automation & Monitoring Dashboard Interface"
                  width={1600}
                  height={1005}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1600px"
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </AnimatedGroup>
            </div>
          </section>
        </main>
        <FeaturesSection />
        <FooterSection />
      </div>
    </>
  );
}
