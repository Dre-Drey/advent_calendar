"use client";

import { Container, Group, useMantineColorScheme, Button } from "@mantine/core";
import { IconNorthStar } from "@tabler/icons-react";
import classes from "../style/header.module.css";

export function Header() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <header>
      <Container size="md">
        <Group className={classes.header}>
          <Group visibleFrom="xs">
            <IconNorthStar size={24} />
            <p>Calendrier de l&apos;Avent</p>
          </Group>
          <Group>
            <Button
              color="beige.1"
              size="xs"
              variant="filled"
              onClick={() => setColorScheme("light")}
            >
              Light
            </Button>
            <Button
              color="beige.1"
              size="xs"
              variant="filled"
              onClick={() => setColorScheme("dark")}
            >
              Dark
            </Button>
            <Button
              color="beige.1"
              size="xs"
              variant="filled"
              onClick={() => setColorScheme("auto")}
            >
              Auto
            </Button>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
