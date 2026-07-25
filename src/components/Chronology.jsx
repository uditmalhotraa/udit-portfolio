import { useEffect, useRef, useState } from "react";
import chronology from "../data/chronology.json";

const STAMP_W = "md:w-[190px]";

export const Chronology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActiveIndex(Number(visible.target.dataset.index));
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ol className="flex flex-col">
      {chronology.map((entry, index) => {
        const isActive = index === activeIndex;
        return (
          <li
            key={entry.id}
            data-index={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`relative flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-l pl-5 md:pl-6 pb-8 last:pb-1 transition-colors duration-500 motion-reduce:transition-none ${
              isActive
                ? "border-brass dark:border-brass-dark"
                : "border-rule dark:border-rule-dark"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[3px] top-[9px] h-[5px] w-[5px] rounded-full transition-colors duration-500 motion-reduce:transition-none ${
                isActive
                  ? "bg-brass dark:bg-brass-dark"
                  : "bg-rule dark:bg-rule-dark"
              }`}
            />

            <span
              className={`${STAMP_W} md:shrink-0 font-mono text-base font-semibold uppercase tracking-label transition-colors duration-500 motion-reduce:transition-none ${
                isActive
                  ? "text-brass dark:text-brass-dark"
                  : "text-ink dark:text-ink-dark"
              }`}
            >
              {entry.stamp}
            </span>

            <p className="font-body text-base md:text-lg leading-relaxed text-ink dark:text-ink-dark">
              {entry.text}
            </p>
          </li>
        );
      })}
    </ol>
  );
};
