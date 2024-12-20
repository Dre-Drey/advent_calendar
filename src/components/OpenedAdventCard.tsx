import { Paper, Title } from "@mantine/core";
import classes from "../style/adventCard.module.css";

type OpenedAdventCardProps = {
  image: string;
  title: string;
  date: number;
  open: () => void;
};
export function OpenedAdventCard({ title, date, open }: OpenedAdventCardProps) {
  return (
    <Paper className={classes.openedPaper} shadow="md" onClick={open}>
      <Title order={3}>{date}</Title>
      <Title order={4}>{title}</Title>
      {/* <Image src={image} height={60} alt={title} /> */}
    </Paper>
  );
}
