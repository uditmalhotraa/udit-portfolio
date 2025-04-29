export const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay between children
      },
    },
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }},
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };
  
  export const defaultTransition = {
    duration: 0.6,
    ease: "easeOut",
  };
  