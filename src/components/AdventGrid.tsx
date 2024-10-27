"use client";

import { Container, Group } from "@mantine/core";
import { data } from "../data/data";
import { AdventCard } from "./AdventCard";

export function AdventGrid() {
  return (
    <Container size="md">
      <Group>
        {data.map((item) => (
          <AdventCard
            key={item.date}
            date={item.date}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Group>
    </Container>
  );
}
