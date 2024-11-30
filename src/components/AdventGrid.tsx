"use client";

import { Container, Group } from "@mantine/core";
import { data } from "../data/data";
import { AdventCard } from "./AdventCard";
import { compareAsc } from "date-fns";

export function AdventGrid() {
  const today = new Date();
  const cardDate = (date: number) => {
    return new Date(2024, 11, date);
  };

  return (
    <Container size="md">
      <Group justify="space-around">
        {data.map((item) => (
          <AdventCard
            key={item.date}
            date={item.date}
            // CompareAsc return 1 if the first date is after the second,
            // -1 if the first date is before the second or 0 if dates are equal.
            isCardEnabled={compareAsc(today, cardDate(item.date)) === 1}
            isCardToday={compareAsc(today, cardDate(item.date)) === 0}
            category={item.category}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          >
            <item.icon size={60} stroke={1} />
          </AdventCard>
        ))}
      </Group>
    </Container>
  );
}
