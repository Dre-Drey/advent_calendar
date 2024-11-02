"use client";

import { Container, Group } from "@mantine/core";
import { data } from "../data/data";
import { AdventCard } from "./AdventCard";

export function AdventGrid() {
  const isCardEnabled = (day: number) => {
    const cardDate = new Date(new Date().getFullYear(), 11, day);
    const currentDate = new Date();
    return cardDate <= currentDate;
  };

  return (
    <Container size="md">
      <Group justify="space-around">
        {data.map((item) => (
          <AdventCard
            key={item.date}
            date={item.date}
            isCardEnabled={isCardEnabled(item.date)}
            category={item.category}
            image={item.image}
            title={item.title}
            description={item.description}
          >
            <item.icon size={60} stroke={1} />
          </AdventCard>
        ))}
      </Group>
    </Container>
  );
}
