import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "media",
  description: "JETT artwork.",
  alternates: { canonical: "/media" },
};

// Native dimensions kept accurate so next/image never has to upscale past
// the source resolution — each image sits at its own aspect ratio instead
// of being forced into a uniform, cropped grid cell.
const gallery = [
  { src: "/images/jett-select.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-hero.png", alt: "JETT", width: 1086, height: 1448 },
  { src: "/images/jett-car-alt.png", alt: "JETT", width: 1145, height: 1374 },
  { src: "/images/jett-extra-01.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-02.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-03.png", alt: "JETT", width: 1145, height: 1374 },
  { src: "/images/jett-extra-04.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-05.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-06.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-07.png", alt: "JETT", width: 1145, height: 1374 },
  { src: "/images/jett-extra-08.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-09.png", alt: "JETT", width: 1254, height: 1254 },
  { src: "/images/jett-extra-10.png", alt: "JETT", width: 1024, height: 1536 },
  { src: "/images/jett-extra-11.png", alt: "JETT", width: 1145, height: 1374 },
  { src: "/images/jett-extra-12.png", alt: "JETT", width: 1145, height: 1374 },
  { src: "/images/jett-extra-13.png", alt: "JETT", width: 1145, height: 1374 },
  { src: "/images/jett-extra-14.png", alt: "JETT", width: 1216, height: 1293 },
  { src: "/images/jett-extra-15.png", alt: "JETT", width: 1024, height: 1536 },
];

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="hud-label mb-4">MEMORY CARD</p>
      <h1 className="font-display text-chrome text-2xl sm:text-4xl mb-4">
        media
      </h1>
      <p className="font-body text-jett-chrome mb-12 max-w-xl leading-relaxed">
        Official JETT artwork. More gets added as it&apos;s made — community
        art and wallpapers land here too once there&apos;s somewhere to
        submit them.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((img) => (
          <div key={img.src} className="art-frame p-1.5 sm:p-2">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
