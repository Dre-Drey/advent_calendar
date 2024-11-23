import classes from "../../style/hero.module.css";
import { Title, Container, Box } from "@mantine/core";
import { IconSnowman } from "@tabler/icons-react";

export default function About() {
  return (
    <Container size="md">
      <Box className={classes.hero}>
        <IconSnowman className={classes.icon} />
        <Title>About</Title>
      </Box>
    </Container>
  );
}
