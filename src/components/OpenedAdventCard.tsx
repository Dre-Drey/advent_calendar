import { Paper, Title, Image, Badge } from "@mantine/core";
import classes from "../style/adventCard.module.css";

type OpenedAdventCardProps = {
  category: string;
  image: string;
  title: string;
  open: () => void;
};
export function OpenedAdventCard({
  category,
  image,
  title,
  open,
}: OpenedAdventCardProps) {
  return (
    <Paper className={classes.openedPaper} shadow="md" onClick={open}>
      <Image src={image} height={60} alt={title} />
      <Badge color="blue.1" style={{ fontSize: "0.5em" }}>
        {category}
      </Badge>
      <Title order={3} c="blue.7">
        {title}
      </Title>
    </Paper>
  );
}
