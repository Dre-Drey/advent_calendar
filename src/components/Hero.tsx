"use client";

import { Container, Stack, Title, Box, Button } from "@mantine/core";
import { IconNorthStar } from "@tabler/icons-react";
import classes from "../style/hero.module.css";
// import { getRemainingDaysToNextCalendar } from "@/utils/date";
import { useReward } from "react-rewards";

export function Hero() {
  const year = new Date().getFullYear();

  const { reward } = useReward("rewardSubtitle", "emoji", {
    angle: 90,
    zIndex: 2,
    emoji: ["🇨🇭", "❤️"],
  });

  return (
    <Container size="md">
      <Box className={classes.hero}>
        <IconNorthStar className={classes.icon} />
        <Stack align="center">
          <Title order={2} style={{ fontFamily: "--mantine-font-family" }}>
            Calendrier
          </Title>
          <Title order={2} style={{ fontSize: "60px" }}>
            de l&apos;Avent
          </Title>
          <Title order={2} style={{ fontFamily: "--mantine-font-family" }}>
            {year}
          </Title>
          <Title
            order={3}
            style={{
              fontFamily: "--mantine-font-family",
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            {/* (J-{getRemainingDaysToNextCalendar()} jours) */}
          </Title>
          <Button variant="transparent" onClick={() => reward()}>
            <Title order={3} c="beige.8" id="rewardSubtitle">
              Swiss Édition
            </Title>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
