"useClient";
import {
  Paper,
  Title,
  Stack,
  Button,
  Modal,
  Card,
  Image,
  Text,
  Badge,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../style/adventCard.module.css";
import { OpenedAdventCard } from "./OpenedAdventCard";
import { LinkModal } from "@/data/data";
import Link from "next/link";

type AdventCardProps = {
  date: number;
  children: React.ReactNode;
  isCardEnabled: boolean;
  isCardToday: boolean;
  category: string;
  image: string;
  title: string;
  description: string;
  link?: LinkModal;
};

export function AdventCard({
  date,
  children,
  isCardEnabled,
  isCardToday,
  category,
  image,
  title,
  description,
  link,
}: AdventCardProps) {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size="lg" withCloseButton={false}>
        <Card>
          <Card.Section mb="lg">
            <Badge color="blue.1">{category}</Badge>
            <Group justify="space-between" my="lg">
              <Title c="blue.8" order={2}>
                {date} décembre - {title}
              </Title>
            </Group>
            <Text size="sm">{description}</Text>
            {link && (
              <>
                <Title order={3} c="blue.8" my="lg">
                  En savoir plus
                </Title>
                <Link href={link.url}>
                  <Text size="sm">{link.text}</Text>
                </Link>
              </>
            )}
          </Card.Section>
          <Card.Section>
            <Image src={image} height={260} alt={title} />
          </Card.Section>
        </Card>
      </Modal>
      {isCardToday && (
        <Paper className={classes.activePaper} shadow="md">
          <Title order={4}>{date}</Title>
          <Stack justify="center" align="center">
            {children}
            <Button
              size="compact-md"
              variant="filled"
              color="beige.7"
              onClick={open}
              disabled={!isCardEnabled}
            >
              Ouvrir
            </Button>
          </Stack>
        </Paper>
      )}
      {isCardEnabled && !isCardToday && (
        <OpenedAdventCard image={image} title={title} date={date} open={open} />
      )}
      {!isCardEnabled && (
        <Paper className={classes.disabledPaper} shadow="md">
          <Title order={4}>{date}</Title>
          <Stack justify="center" align="center">
            {children}
            <Button
              size="compact-md"
              variant="filled"
              color="lightBeige.5"
              onClick={open}
              disabled={!isCardEnabled}
            >
              Ouvrir
            </Button>
          </Stack>
        </Paper>
      )}
    </>
  );
}
