import React from "react";
import { motion, Variants } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { containerVariants, itemVariants, defaultTransition } from "../animations/variants";

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
  threshold =  0.2,
  stagger = false,
}: AnimatedDivProps) {
  const { ref, inView } = useScrollAnimation(threshold);

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={className}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div key={index} variants={item} transition={transition}>
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
