"useClient";
import { Card } from "@mantine/core";
import { CardType } from "../data/data";

export function AdventCard({ date, icon, title, description }: CardType) {
  return (
    <Card>
      <p>{date}</p>
      <p>{icon}</p>
      <p>{title}</p>
      <p>{description}</p>
    </Card>
  );
}
