import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-jett-chrome-dim">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-body tracking-widest text-jett-chrome-dim">
        <div className="flex items-center gap-4">
          <p>{site.name} — NO SIGNAL. STILL HERE.</p>
          {site.social.x && (
            <a
              href={site.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-jett-chrome-dim hover:text-jett-cyan transition-colors"
            >
              X
            </a>
          )}
        </div>
        <p>
          SPECULATIVE ASSET. NOT FINANCIAL ADVICE. VERIFY EVERYTHING AT{" "}
          <span className="text-jett-chrome">/buy</span> BEFORE BUYING.
        </p>
      </div>
    </footer>
  );
}
