"use client";

import { Container, Group } from "@mantine/core";
import { data } from "../data/data";
import { AdventCard } from "./AdventCard";
import { format } from "date-fns";

export function AdventGrid() {
  const currentDate = format(new Date(), "dd/MM/yyyy");

  const getCardDate = (day: number) => {
    return format(new Date(new Date().getFullYear(), 10, day), "dd/MM/yyyy");
  };
  const isCardEnabled = (day: number) => {
    return getCardDate(day) <= currentDate;
  };

  const isCardToday = (day: number) => {
    if (getCardDate(day) == currentDate) {
      return true;
    }
    return false;
  };

  return (
    <Container size="md">
      <Group justify="space-around">
        {data.map((item) => (
          <AdventCard
            key={item.date}
            date={item.date}
            isCardEnabled={isCardEnabled(item.date)}
            isCardToday={isCardToday(item.date)}
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
