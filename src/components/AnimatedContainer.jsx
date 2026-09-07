"use client";

import { motion } from "motion/react";

export default function AnimatedContainer({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}