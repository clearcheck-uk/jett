import Image from "next/image";
import Link from "next/link";
import { TitleMenu } from "@/components/TitleMenu";
import { TokenPanel } from "@/components/TokenPanel";

export default function Home() {
  return (
    <>
      {/* HERO — the supplied title-card artwork IS the hero, and its own
          baked-in "NEW GAME / LOAD GAME / OPTIONS / EXIT" menu is the real,
          keyboard-accessible navigation via transparent overlay links
          (TitleMenu). The artwork pixels are untouched — nothing is drawn
          on top except invisible-until-hovered hit areas. */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="hud-label">PLAYER 01 · STATUS: ONLINE</p>
          <p className="hud-label hidden sm:block">SAVE DATA: FOUND</p>
        </div>

        <TokenPanel variant="compact" />

        <div className="art-frame panel-bevel p-1.5 sm:p-2 mt-6">
          <div className="relative">
            <Image
              src="/images/jett-titlecard.png"
              alt="JETT — NEW GAME, LOAD GAME, OPTIONS, EXIT"
              width={1536}
              height={1024}
              priority
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 96vw, 1024px"
            />
            <TitleMenu />
          </div>
        </div>

        <p className="mt-6 font-body text-[11px] text-jett-chrome-dim tracking-widest px-1">
          just jett.<span className="blink-caret">_</span>
        </p>
      </section>

      {/* EYES — used as a real compositional element: JETT watching the
          reveal text rather than another stacked gallery image. */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          <div className="lg:col-span-3 art-frame overflow-hidden relative">
            <Image
              src="/images/jett-eyes.png"
              alt="JETT"
              width={1672}
              height={941}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 96vw, 60vw"
            />
            <p className="hud-label absolute top-3 left-3 sm:top-4 sm:left-4">
              SIGNAL FOUND
            </p>
          </div>

          <div className="lg:col-span-2 panel-bevel panel-frame p-6 sm:p-8 flex flex-col justify-center">
            <p className="font-body text-jett-chrome text-lg sm:text-xl leading-relaxed">
              Nobody knows where JETT came from. Nobody&apos;s sure what he
              does. He just showed up, somewhere between a corrupted save
              file and the internet, and never left.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 font-body text-xs tracking-widest text-jett-cyan hover:text-jett-ice transition-colors"
            >
              WHO IS JETT? →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
