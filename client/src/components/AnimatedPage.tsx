import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageProps {
  children: ReactNode;
}

// Page transition animation wrapper component with reduced motion support
export default function AnimatedPage({ children }: AnimatedPageProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: MotionProps["variants"] = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
  };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: "easeOut" };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
