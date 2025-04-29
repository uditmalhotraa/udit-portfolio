import React from "react";
import { motion, Variants } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import useScrollDirection from "../hooks/useScrollDirection"; // Import the new hook
import { containerVariants, itemVariants, defaultTransition } from "../animations/varients";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  container?: Variants;
  item?: Variants;
  transition?: object;
  threshold?: number;
  stagger?: boolean;
}

export default function AnimatedDiv({
  children,
  className = "",
  container = containerVariants,
  item = itemVariants,
  transition = defaultTransition,
  threshold = 0.2,
  stagger = false,
}: AnimatedDivProps) {
  const { ref, inView } = useScrollAnimation(threshold);
  const scrollDirection = useScrollDirection(); // Get the scroll direction

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit={!inView ? "exit" : "visible"}
        className={className}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div
                key={index}
                variants={item}
                transition={{
                  ...transition,
                  delay: scrollDirection === 'up' ? (children.length - 1 - index) * 0.15 : index * 0.15,
                }}
              >
                {child}
              </motion.div>
            ))
          : (
              <motion.div variants={item} transition={transition}>
                {children}
              </motion.div>
            )}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={item}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}