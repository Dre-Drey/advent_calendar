"use client";
import { useEffect, useRef, useCallback } from "react";
import { random } from "@/utils/random";

// Utility helper for random number generation
export const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
): (() => void) => {
  const timeoutId = useRef<number | null>(null);
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);

        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current!);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current!);
  }, []);

  return cancel;
};
