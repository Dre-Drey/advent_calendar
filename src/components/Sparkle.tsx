"use client";
import classes from "../style/sparkle.module.css";
import { Box } from "@mantine/core";

type SparkleProps = {
  color: string;
  size: number;
  style: React.CSSProperties;
};

export default function Sparkle({ color, size, style }: SparkleProps) {
  const path =
    "M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z";

  return (
    <Box className={classes.sparkle}>
      <svg
        // className={classes.sparkleSVG}
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        style={style}
      >
        <path d={path} fill={color} />
      </svg>
    </Box>
  );
}
