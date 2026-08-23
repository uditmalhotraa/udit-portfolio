import PropTypes from "prop-types";
import book from "../data/book.json";
import ArrowRightIcon from "../assets/ArrowRightIcon";
import Kindle from "../assets/Kindle";
import Paperback from "../assets/Paperback";
import { useUserCountry } from "../hooks/useUserCountry";
import { Chronology } from "./Chronology";

const CARD =
  "z-10 flex flex-col px-4 md:px-6 rounded-2xl w-full h-auto border shadow-container border-rule-dark backdrop-blur-sm bg-panel-dark/[0.85]";

const CARD_HEADING =
  "font-stencil uppercase tracking-label text-2xl font-regular text-field-dark";

const DIVIDER = "border-t border-rule-dark";

const LABEL =
  "font-mono text-[14px] uppercase tracking-label text-field-dark";

const BUY =
  "font-body group flex-1 flex flex-col items-center justify-center gap-1 h-10 py-5 px-3 rounded-xl border border-field-dark bg-panel-dark/60 text-ink-dark uppercase tracking-label text-lg font-bold transition-colors duration-300 motion-reduce:transition-none hover:text-brass-dark hover:border-brass-dark hover:bg-brass-dark/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-dark";

/* Fires into whatever analytics is on the page; harmless if neither exists. */
const trackBuy = (format, store) => {
  window.plausible?.("Buy click", { props: { format, store } });
  window.gtag?.("event", "buy_click", { format, store });
};

const Card = ({ title, id, children }) => (
  <section aria-labelledby={id} className={CARD}>
    <h2 id={id} className={`${CARD_HEADING} mb-4 pt-5`}>
      {title}
    </h2>
    {children}
  </section>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const BuyButton = ({ href, label, store, price, format, isbn }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackBuy(format, store)}
    className={BUY}
  >
    <div className="w-full font-body px-1 lg:px-2.5 flex flex-row items-center justify-between gap-1">
      <div className="flex flex-col items-start leading-4 gap-[2px] lg:gap-1">
        <span className="inline-flex text-base items-center gap-[6px]">
          {label}
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform duration-300 motion-reduce:transition-none transform group-hover:translate-x-1 fill-ink-dark group-hover:fill-brass-dark"
          />
        </span>
        <span className="inline-flex text-[10px] tracking-wide items-center">{isbn}</span>
      </div>
      {(store || price) && (
        <div className="flex flex-col items-end leading-4 gap-[2px] lg:gap-1">
          <span className="inline-flex text-lg items-center">{price}</span>
          <span className="inline-flex text-[10px] tracking-wide items-center">{store}</span>
        </div>
      )}
    </div>
  </a>
);

BuyButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  store: PropTypes.string,
  price: PropTypes.string,
  format: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

/* Spec rows — only the fields you actually supply in book.json get rendered. */
const Spec = ({ items }) => (
  <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
    {items.map(([term, value]) => (
      <div key={term} className="flex flex-col gap-[2px]">
        <dt className={LABEL}>{term}</dt>
        <dd className="font-body text-base text-ink-dark">
          {value}
        </dd>
      </div>
    ))}
  </dl>
);

Spec.propTypes = { items: PropTypes.array.isRequired };

export const Home = () => {
  /* null while the lookup is in flight — we fall through to the worldwide
   * links, so the buttons are never dead. */
  const isIndia = useUserCountry();
  const single = book.length === 1;

  const featured = book[0];
  const barURL =
    featured[isIndia ? `linkURLPaperbackIN` : `linkURLPaperbackWorld`];

  return (
    <>
      <div className="flex flex-col w-full gap-8">
        <Card title="Get the Book" id="book-heading">
          <div className="flex flex-col">
            {book.map((b, index) => {
              const isLast = index === book.length - 1;

              const ebookURL =
                b[isIndia ? `linkURLeBookIN` : `linkURLeBookWorld`];
              const paperbackURL =
                b[isIndia ? `linkURLPaperbackIN` : `linkURLPaperbackWorld`];

              /* Optional fields — omit any and the row disappears:
               * published, format, pages, isbn, language                 */
              const spec = [
                ["Published", b.published],
                ["Format", b.format],
                ["Pages", b.pages],
                ["Language", b.language],
              ].filter(([, v]) => Boolean(v));

              return (
                <article
                  key={b.id ?? b.name}
                  className={`flex flex-col pt-1 pb-5 ${
                    isLast ? "" : `${DIVIDER} mb-5`
                  }`}
                >
                  <h3
                    className={
                      single
                        ? "sr-only"
                        : "font-display uppercase tracking-display text-xl font-bold text-ink-dark mb-4"
                    }
                  >
                    {b.name}
                  </h3>

                  {spec.length > 0 && <Spec items={spec} />}

                  <div
                    className={`flex flex-col items-stretch w-full ${DIVIDER} mt-5 pt-5 gap-3`}
                  >
                    <BuyButton
                      href={ebookURL}
                      label="Get eBook"
                      format="ebook"
                      isbn={`ISBN: ${b.isbne}`}
                      store={b[isIndia ? `ebookStoreIN` : `ebookStoreWorld`]}
                      price={b[isIndia ? `ebookPriceIN` : `ebookPriceWorld`]}
                      Icon={Kindle}
                    />
                    <BuyButton
                      href={paperbackURL}
                      label="Get Paperback"
                      format="paperback"
                      isbn={`ISBN: ${b.isbnp}`}
                      store={
                        b[isIndia ? `paperbackStoreIN` : `paperbackStoreWorld`]
                      }
                      price={
                        b[isIndia ? `paperbackPriceIN` : `paperbackPriceWorld`]
                      }
                      Icon={Paperback}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </Card>

        <Card title="About" id="about-heading">
          <div className={`flex flex-col mb-6 ${DIVIDER} mt-1 pt-5`}>
            <p className="font-body text-base leading-relaxed text-ink-dark">
              Inspired by actual events, this powerful novel unravels the untold
              stories of bravery, fear, and sacrifice during the Pathankot
              Airbase terror attack, where ordinary lives met extraordinary
              courage. Right from the making of a terrorist to the end. It shows
              the psychology of terrorism, the war industry and the involvement
              of power and money as the driving force. Providing a deep dive
              into the mysteries and thrills of how our world works, along with
              a humanitarian approach for a better future.
            </p>
          </div>
        </Card>

        <Card title="Chronology" id="chronology-heading">
          <div className={`flex flex-col mb-6 ${DIVIDER} mt-1 pt-6`}>
            <Chronology />
          </div>
        </Card>
      </div>

      {/* Mobile buy bar. Landing.jsx adds pb-24 on small screens so this never
          covers the footer. */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-panel-dark/90 backdrop-blur-md border-t border-rule-dark">
        <a
          href={barURL}
          target="_self"
          rel="noopener noreferrer"
          onClick={() =>
            trackBuy(
              "ebook",
              featured[
                isIndia ? `linkURLPaperbackIN` : `linkURLPaperbackWorld`
              ],
            )
          }
          className="flex text-ink items-center justify-center gap-2 w-full rounded-lg bg-brass-dark py-3 font-display uppercase tracking-label text-base font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-field"
        >
          Buy the book
          {featured[isIndia ? `paperbackPriceIN` : `paperbackPriceWorld`] && (
            <>
              {" "}
              @ {featured[isIndia ? `paperbackPriceIN` : `paperbackPriceWorld`]}
            </>
          )}
        </a>
      </div>
    </>
  );
};
