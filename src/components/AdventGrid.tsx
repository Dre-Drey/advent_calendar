"use client";

import { Container, Group } from "@mantine/core";
import { data } from "../data/data";
import { AdventCard } from "./AdventCard";

export function AdventGrid() {
  return (
    <Container size="md">
      <Group justify="space-around">
        {data.map((item) => (
          <AdventCard key={item.date} date={item.date}>
            <item.icon size={60} stroke={1} style={{ margin: "auto" }} />
          </AdventCard>
        ))}
      </Group>
    </Container>
  );
}
