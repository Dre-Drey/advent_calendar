import { Container, Text } from "@mantine/core";
import classes from "../style/header.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <Container size="md" className={classes.footer}>
      <Text size="xs" c="blue.8">
        Fait avec Nextjs, Mantine, Vercel et beaucoup d&apos;❤️ par{" "}
        <Link href="https://github.com/Dre-Drey">Dre-Drey</Link> - 2024
      </Text>
    </Container>
  );
}
