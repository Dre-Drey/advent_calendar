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

type AdventCardProps = {
  date: number;
  children: React.ReactNode;
  isCardEnabled: boolean;
  category: string;
  image: string;
  title: string;
  description: string;
};

export function AdventCard({
  date,
  children,
  isCardEnabled,
  category,
  image,
  title,
  description,
}: AdventCardProps) {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} size="lg" withCloseButton={false}>
        <Card>
          <Card.Section mb="lg">
            <Badge color="blue.1">{category}</Badge>
            <Group justify="space-between" my="lg">
              <Title c="blue.7">{title}</Title>
            </Group>
            <Text size="sm">{description}</Text>
          </Card.Section>

          <Card.Section>
            <Image src={image} height={160} alt={title} />
          </Card.Section>
        </Card>
      </Modal>
      <Paper
        // className={isCardEnabled ? classes.activePaper : classes.disabledPaper}
        className={classes.activePaper}
        shadow="md"
      >
        <Title order={4}>{date}</Title>
        <Stack justify="center" align="center">
          {children}
          <Button
            size="compact-md"
            variant="filled"
            color="lightBeige.5"
            onClick={open}
          >
            Ouvrir
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
