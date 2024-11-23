import { Paper, Title, Image, Badge } from "@mantine/core";
import classes from "../style/adventCard.module.css";

type OpenedAdventCardProps = {
  image: string;
  title: string;
  date: number;
  open: () => void;
};
export function OpenedAdventCard({
  image,
  title,
  date,
  open,
}: OpenedAdventCardProps) {
  return (
    <Paper className={classes.openedPaper} shadow="md" onClick={open}>
      <Title>{date}</Title>
      <Title order={3} c="blue.7">
        {title}
      </Title>
      {/* <Image src={image} height={60} alt={title} /> */}
    </Paper>
  );
}
