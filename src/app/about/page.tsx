import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "who is jett?",
  description: "JETT is just JETT. No profession, no explanation needed.",
  alternates: { canonical: "/about" },
};

const stats = [
  { label: "STATUS", value: "UNKNOWN" },
  { label: "AGE", value: "UNKNOWN" },
  { label: "LOCATION", value: "UNKNOWN" },
  { label: "LEVEL", value: "UNKNOWN" },
  { label: "ATTITUDE", value: "UNKNOWN" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="hud-label mb-4">PLAYER SELECT</p>
      <h1 className="font-display text-chrome text-2xl sm:text-4xl mb-12">
        just jett.
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="art-frame p-1.5 sm:p-2">
          <Image
            src="/images/jett-select.png"
            alt="JETT"
            width={1254}
            height={1254}
            className="w-full h-auto"
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>

        <div className="space-y-8">
          <div className="panel-bevel panel-glow panel-frame p-6">
            <p className="hud-label mb-4">STATS</p>
            <dl className="grid grid-cols-2 gap-y-3 font-body text-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="contents">
                  <dt className="text-jett-chrome-dim tracking-widest">
                    {stat.label}
                  </dt>
                  <dd className="text-jett-chrome">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="panel-bevel p-6">
            <p className="hud-label mb-4">SAVE FILE</p>
            <p className="font-body text-jett-chrome leading-relaxed">
              JETT just showed up one day. No explanation. None needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
