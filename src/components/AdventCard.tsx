"useClient";
import { Paper, Title } from "@mantine/core";
import classes from "../style/adventCard.module.css";

export function AdventCard({ date, children }) {
  // const imagePath = "/icons/";
  return (
    <Paper className={classes.paper} shadow="md">
      <Title order={4}>{date}</Title>
      {/* <icon alt="icone de la carte" c="blue.7" /> */}
      {children}
    </Paper>
  );
}
