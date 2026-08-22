import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import UMLogo from "../assets/UMLogo";
import book from "../data/book.json";
import Chip from "../components/Chip";

const COVER_ALT =
  "Udit Malhotra holding a paperback copy of his novel Terror 2016";

/* Intrinsic dimensions of the source photo — these reserve the space and stop
 * the layout shifting as it loads. Update to match your actual file. */
const COVER_W = 1170;
const COVER_H = 1462;

/* Set to false to remove the intro logo entirely. When true it waits for the
 * cover to decode instead of a blind timer, and gives up after MAX_INTRO_MS. */
const SHOW_INTRO = true;
const MAX_INTRO_MS = 1200;

const jsonLd = (b) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: b.name,
  author: {
    "@type": "Person",
    name: "Udit Malhotra",
    url: "https://uditmalhotra.in",
  },
  url: "https://uditmalhotra.in",
  image: "https://uditmalhotra.in/images/terror-2016-1440.webp",
  inLanguage: b.language || "en",
  datePublished: b.datePublished || undefined,
  isbn: b.isbn || undefined,
  numberOfPages: b.pages || undefined,
  description: b.description || undefined,
  offers: [b.offerEbook, b.offerPaperback].filter(Boolean).map((o) => ({
    "@type": "Offer",
    price: o.price,
    priceCurrency: o.currency,
    url: o.url,
    availability: "https://schema.org/InStock",
  })),
});

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(SHOW_INTRO);
  const featured = book[0];

  useEffect(() => {
    if (!SHOW_INTRO) return;

    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setIsLoading(false);
      }
    };

    const img = new Image();
    img.src = "/images/terror-2016-960.webp";
    (img.decode ? img.decode() : Promise.resolve())
      .catch(() => {})
      .then(finish);

    const cap = setTimeout(finish, MAX_INTRO_MS);
    return () => clearTimeout(cap);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
  }, [isLoading]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(featured)) }}
      />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:rounded-md focus:px-4 focus:py-2 focus:font-mono focus:uppercase text-ink focus:bg-panel-dark focus:text-ink-dark"
      >
        Skip to content
      </a>

      <div className="relative flex flex-col w-full bg-surface-dark">
        <Header />

        {/* pb-24 on mobile clears the fixed buy bar rendered by Home. */}
        <main
          id="content"
          className="flex flex-col lg:flex-row px-5 lg:px-0 mt-24 lg:mt-28 mb-10 pb-24 lg:pb-0 gap-12 w-full max-w-[768px] lg:max-w-[986px] xl:max-w-[1236px] 2xl:max-w-[1456px] mx-auto"
        >
          {/* Hero — cover photo + title */}
          <section
            aria-labelledby="book-title"
            className="lg:!sticky z-20 lg:top-[112px] lg:w-[456px] lg:shrink-0 xl:w-[584px] relative flex flex-col justify-end shadow-container rounded-2xl w-full h-[600px] md:h-[824px] lg:h-[524px] xl:h-[724px] border border-rule-dark"
          >
            <img
              src="/images/terror-2016-960.webp"
              srcSet="
  /images/terror-2016-480.webp 480w,
  /images/terror-2016-960.webp 960w,
  /images/terror-2016-1440.webp 1440w
"
              sizes="(min-width: 1280px) 584px, (min-width: 1024px) 456px, 100vw"
              width={COVER_W}
              height={COVER_H}
              alt={COVER_ALT}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover object-center"
            />
            <Chip
              className="absolute top-3 left-3 z-10"
              type="filled"
              text="LATEST RELEASE"
            />

            <div className="absolute -bottom-8 -left-[8px] md:-left-[16px] z-10 flex flex-col gap-2 w-[calc(100%+16px)] md:w-[calc(100%+32px)] bg-panel-dark/[0.92] shadow-container backdrop-blur-md p-5 rounded-2xl border border-rule-dark">
              <h1
                id="book-title"
                className="font-title uppercase tracking-display text-5xl md:text-6xl font-extrabold text-field-dark"
              >
                {featured.name}
              </h1>
              <p className="font-mono text-[14px] uppercase tracking-label text-ink-dark/70">
                {featured.tagline || "Inspired by the Pathankot airbase attack"}
              </p>
            </div>
          </section>

          <div className="flex flex-col w-full min-w-0 gap-12 mt-3 md:mt-0">
            <Home />
            <Footer />
          </div>
        </main>
      </div>

      {isLoading && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface-dark h-[100svh] w-full pointer-events-none motion-reduce:hidden"
        >
          <UMLogo className="w-28 h-28 animate-spin-once" />
        </div>
      )}
    </>
  );
};
