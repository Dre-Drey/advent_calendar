import classes from "../../style/hero.module.css";
import { Title, Container, Box, Text } from "@mantine/core";
import { IconSnowman } from "@tabler/icons-react";

export default function About() {
  return (
    <Container size="md">
      <Box className={classes.hero}>
        <IconSnowman className={classes.icon} />
        <Title c="blue.8">About</Title>
      </Box>
      <Box className={classes.textAbout}>
        <Text size="md">
          Et voici le calendrier de l&apos;Avent, version suisse !.
        </Text>
        <Text size="md">
          Qu&apos;est-ce que ca veut dire Swiss Edition ? Ca veut dire que tous
          les jours, une catégorie est mise à l&apos;honneur entre
          &quot;Randonnée&quot; (pour découvrir de nouvelles balades),
          &quot;Patrimoine&quot; (pour découvrir un élément clé de la culture
          suisse), &quot;Fun Fact&quot; (pour un fait inédit sur la Suisse),
          &quot;Recettes&quot; (pour toujours plus de gourmandise, et vous
          verrez tout ne tourne pas autour du chocolat !) et
          &quot;Inventions&quot; (on ne s&apos;en doute peut-être pas, mais la
          Suisse a vu naitre beaucoup d&apos;idées géniales).
        </Text>
      </Box>
    </Container>
  );
}
