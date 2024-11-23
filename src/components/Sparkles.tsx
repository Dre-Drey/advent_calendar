"use client";
import { useState } from "react";
import classes from "../style/sparkle.module.css";
import { Box } from "@mantine/core";
import { random, range } from "@/utils/random";
import Sparkle from "./Sparkle";
// import { usePrefersReducedMotion } from "./hooks/UsePrefersReducedMotion";
import { useRandomInterval } from "./hooks/UseRandomInterval";

const DEFAULT_COLOR = "#FFC700";

type Sparkles = {
  color: string;
  children: React.ReactNode;
};

const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(2, 6),
    style: {
      //random spot in the available space
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
      zIndex: 2,
    },
  };
  return sparkle;
};

export function Sparkles({ color = DEFAULT_COLOR, children }: Sparkles) {
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle(color));
  });
  // const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const now = Date.now();
      const sparkle = generateSparkle(color);

      //Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });

      //Integrate the new sparkle
      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    50,
    450
  );
  console.log(sparkles);
  return (
    <Box className={classes.sparklesContainer}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <Box className={classes.sparkleChildContainer}>{children}</Box>
    </Box>
  );
}
