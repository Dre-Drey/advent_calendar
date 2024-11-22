"use client";

import {
  Container,
  Group,
  useMantineColorScheme,
  Switch,
  rem,
  useComputedColorScheme,
  Text,
} from "@mantine/core";
import { IconNorthStar, IconSnowman } from "@tabler/icons-react";
import classes from "../style/header.module.css";
// import { useReward } from "react-rewards";
import { IconBrightnessUpFilled, IconMoonFilled } from "@tabler/icons-react";
import Link from "next/link";

export function Header() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const sunIcon = (
    <IconBrightnessUpFilled
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
    />
  );
  const moonIcon = (
    <IconMoonFilled style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  const handleOnChange = () => {
    if (computedColorScheme === "dark") {
      setColorScheme("light");
      // lightReward();
    }
    if (computedColorScheme === "light") {
      setColorScheme("dark");
      // darkReward();
    }
  };

  // const { reward: lightReward, isAnimating: isLightAnimating } = useReward(
  //   "rewardLight",
  //   "emoji",
  //   {
  //     angle: 225,
  //     zIndex: 2,
  //     emoji: ["☀️", "😎"],
  //   }
  // );
  // const { reward: darkReward, isAnimating: isDarkAnimating } = useReward(
  //   "rewardDark",
  //   "emoji",
  //   {
  //     angle: 225,
  //     zIndex: 2,
  //     emoji: ["🌟", "🌙"],
  //   }
  // );

  return (
    <header>
      <Container size="md">
        <Group className={classes.header}>
          <Group className={classes.nav}>
            <Link href="/" className={classes.menuItem}>
              <Group>
                <IconNorthStar size={24} />
                <Text visibleFrom="xs">Calendrier de l&apos;Avent</Text>
              </Group>
            </Link>
            <Link href="/about" className={classes.menuItem}>
              <Group>
                <IconSnowman size={24} />
                <Text visibleFrom="xs">About</Text>
              </Group>
            </Link>
          </Group>
          <Switch
            size="md"
            onLabel={sunIcon}
            offLabel={moonIcon}
            onChange={handleOnChange}
          />
        </Group>
      </Container>
    </header>
  );
}
