"use client";

import { Container, Stack } from "@mantine/core";
import { IconNorthStar } from "@tabler/icons-react";

export function Hero() {
  return (
    <Container size="md">
      <Stack align="center">
        <IconNorthStar size={108} />
        <h1>Calendrier de l&apos;Avent 2024</h1>
      </Stack>
    </Container>
  );
}
