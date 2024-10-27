"use client";

import { Container, Group, useMantineColorScheme, Button } from "@mantine/core";
import { IconNorthStar } from "@tabler/icons-react";

export function Header() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <header>
      <Container size="md">
        <Group justify="space-between">
          <Group>
            <IconNorthStar size={28} />
            <p>Calendrier de l&apos;Avent</p>
          </Group>
          <Group>
            <Button onClick={() => setColorScheme("light")}>Light</Button>
            <Button onClick={() => setColorScheme("dark")}>Dark</Button>
            <Button onClick={() => setColorScheme("auto")}>Auto</Button>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
