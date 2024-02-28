import { useEffect, useState } from "react";
import * as Styled from "./styled";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  directionY?: boolean;
  directionX?: boolean;
  width?: number;
}

export default function Hr({
  directionX = false,
  directionY = true,
  width = 85,
}: IProps) {
  // directiony: false = bottom, true = top
  // directionx: false = left, true = right
  const [isVisible, setIsVisible] = useState("hidden");
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setIsVisible("visible");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isVisible}
      transition={{ duration: 0, delay: 0 }}
    >
      <Styled.Hr
        directionX={directionX}
        directionY={directionY}
        width={width}
      />
    </motion.div>
  );
}
