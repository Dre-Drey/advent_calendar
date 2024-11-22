"use client";

import { Container, Stack, Title, Box } from "@mantine/core";
import { IconNorthStar } from "@tabler/icons-react";
import classes from "../style/hero.module.css";
import { getRemainingDaysToNextCalendar } from "@/utils/date";
import Logo from "../../public/images/Logo Swiss.svg";
import Image from "next/image";

export function Hero() {
  const year = new Date().getFullYear();

  return (
    <Container size="md">
      <Box className={classes.hero}>
        <IconNorthStar className={classes.icon} />
        {/* <Image
          src={Logo}
          alt="Logo Swiss"
          className={classes.logo}
          width={100}
          height={100}
        /> */}
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
            (J-{getRemainingDaysToNextCalendar()} jours)
          </Title>
        </Stack>
      </Box>
    </Container>
  );
}
