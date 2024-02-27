"use client";
import { ReactNode, useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  children: ReactNode;
  initialY?: number;
  delay?: number;
  duration?: number;
}

export default function Reveal({ children, initialY = 75, delay = 0.12, duration = 0.5}: IProps) {
  const [isVisible, setIsVisible] = useState("hidden");
  const {ref, inView} = useInView({ threshold: 0 });

  useEffect(() => {
    console.log(inView)
    if(inView) {
        setIsVisible("visible");
    }
  }, [inView])

  return (
    <>
      <motion.div
      ref={ref}
      variants={{
        hidden: {opacity: 0, y: initialY},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden"
      animate={isVisible}
      transition={{ duration: duration, delay: delay }}
      >{children}</motion.div>
    </>
  );
}