"use client";

import { useState } from "react";
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
  getGradient,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../style/adventCard.module.css";
import { OpenedAdventCard } from "./OpenedAdventCard";
import { LinkModal } from "@/data/data";
import Link from "next/link";
import Sparkles from "react-sparkle";

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
  const [isTodayCardOpened, setIsTodayCardOpened] = useState(false);
  const theme = useMantineTheme();

  const handleOnClick = () => {
    open();
    setIsTodayCardOpened(true);
  };

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
          <Title order={3}>{date}</Title>
          <Stack justify="center" align="center">
            {children}
            <Button
              size="compact-md"
              variant="filled"
              color={getGradient(
                { deg: 90, from: "beige.2", to: "beige.8" },
                theme
              )}
              onClick={handleOnClick}
              disabled={!isCardEnabled}
              style={{ position: "relative", border: "none" }}
            >
              <Sparkles
                color={[
                  "#fffee2",
                  "#fefbcd",
                  "#fcf79d",
                  "#fbf269",
                  "#f9ef3e",
                  "#f8ec23",
                  "#f8eb10",
                  "#dcd100",
                  "#c3b900",
                  "#a8a000",
                ]}
                count={10}
                minSize={5}
                maxSize={10}
                fadeOutSpeed={50}
                overflowPx={20}
              />
              Ouvrir
            </Button>
          </Stack>
        </Paper>
      )}
      {isCardEnabled && !isCardToday && (
        <OpenedAdventCard image={image} title={title} date={date} open={open} />
      )}
      {!isCardEnabled && !isTodayCardOpened && (
        <Paper className={classes.disabledPaper} shadow="md">
          <Title order={3}>{date}</Title>
          <Stack justify="center" align="center">
            {children}
            <Button
              size="compact-md"
              variant="filled"
              color="lightBeige.5"
              onClick={open}
              disabled={!isCardEnabled}
              style={{ cursor: "auto" }}
            >
              Ouvrir
            </Button>
          </Stack>
        </Paper>
      )}
    </>
  );
}
