import {
  IconChristmasTree,
  IconCandle,
  IconIceSkating,
  IconDeer,
  IconSnowflake,
  IconSnowman,
  IconChristmasBall,
  IconSleigh,
} from "@tabler/icons-react";

export type CardType = {
  date: number;
  icon: any;
  title: string;
  category: CategoryType;
  image: string;
  description: string;
};
export type DataType = CardType[];

export type CategoryType =
  | "Patrimoine"
  | "Recettes"
  | "Randonnées"
  | "Fun Fact"
  | "Mots suisses"
  | "Inventions";

export const data: DataType = [
  {
    date: 1,
    icon: IconCandle,
    title: "Le FC Sion",
    category: "Patrimoine",
    image: "/images/FC-Sion.jpeg",
    description: "src",
  },
  {
    date: 2,
    icon: IconIceSkating,
    title: "Le carac",
    category: "Recettes",
    image: "/images/carac.jpeg",
    description: "src",
  },
  {
    date: 3,
    icon: IconChristmasTree,
    title: "Bella Tola",
    category: "Randonnées",
    image: "/images/Bella-Tola.jpg",
    description: "src",
  },
  {
    date: 4,
    icon: IconDeer,
    title: "1,5 millions de vaches",
    category: "Fun Fact",
    images: "/images/vaches.jpeg",
    description: "src",
  },
  {
    date: 5,
    icon: IconSleigh,
    title: "Ça joue ?",
    category: "Mots suisses",
    image: "/images/ca-joue.jpeg",
    description: "src",
  },
  {
    date: 6,
    icon: IconSnowflake,
    title: "Helvetica",
    category: "Inventions",
    image: "/images/police-helvetica.jpeg",
    description: "src",
  },
  {
    date: 7,
    icon: IconSnowman,
    title: "La bénédiction des fromages",
    category: "Patrimoine",
    image: "/images/benediction_fromages.jpg",
    description: "src",
  },
  {
    date: 8,
    icon: IconIceSkating,
    title: "src",
    category: "Recettes",
    image: "/images/roesti.jpeg",
    description: "src",
  },
  {
    date: 9,
    icon: IconChristmasBall,
    title: "src",
    category: "Randonnées",
    image: "/images/rochers-naye.jpeg",
    description: "src",
  },
  {
    date: 10,
    icon: IconSleigh,
    title: "src",
    category: "Fun Fact",
    image: "/images/rochers-naye.jpeg",
    description: "src",
  },
  {
    date: 11,
    icon: IconDeer,
    title: "Décevoir en bien",
    category: "Mots suisses",
    image: "/images/decevoir-en-bien.jpeg",
    description: "src",
  },
  {
    date: 12,
    title: "L'économe Rex",
    icon: IconSleigh,
    category: "Inventions",
    image: "/images/Econome_rex.jpeg",
    description: "src",
  },
  {
    date: 13,
    icon: IconSnowflake,
    title: "Le Rivella",
    category: "Patrimoine",
    image: "/images/Rivella.jpg",
    description: "src",
  },
  {
    date: 14,
    icon: IconSnowman,
    title: "src",
    category: "Recettes",
    image: "/images/roesti.jpeg",
    description: "src",
  },
  {
    date: 15,
    icon: IconIceSkating,
    title: "src",
    category: "Randonnées",
    image: "/images/rochers-naye.jpeg",
    description: "src",
  },
  {
    date: 16,
    icon: IconChristmasBall,
    title: "src",
    category: "Fun Fact",
    image: "/images/rochers-naye.jpeg",
    description: "src",
  },
  {
    date: 17,
    icon: IconChristmasTree,
    title: "La fourre de duvet",
    category: "Mots suisses",
    image: "/images/fourre-duvet.jpeg",
    description: "src",
  },
  {
    date: 18,
    icon: IconDeer,
    title: "La fermeture éclair",
    category: "Inventions",
    image: "/images/fermeture-eclair.jpeg",
    description: "src",
  },
  {
    date: 19,
    icon: IconSleigh,
    title: "Le patois",
    category: "Patrimoine",
    image: "/images/patois.jpeg",
    description: "src",
  },
  {
    date: 20,
    icon: IconSnowflake,
    title: "src",
    category: "Recettes",
    image: "/images/roesti.jpeg",
    description: "src",
  },
  {
    date: 21,
    icon: IconSnowman,
    title: "src",
    category: "Randonnées",
    image: "/images/rochers-naye.jpeg",
    description: "src",
  },
  {
    date: 22,
    icon: IconIceSkating,
    title: "src",
    category: "Fun Fact",
    image: "/images/rochers-naye.jpeg",
    description: "src",
  },
  {
    date: 23,
    icon: IconCandle,
    title: "Le PET et le Sagex",
    category: "Mots suisses",
    image: "/images/pet-sagex.jpeg",
    description: "src",
  },
  {
    date: 24,
    icon: IconChristmasBall,
    title: "Doodle",
    category: "Inventions",
    image: "/images/doodle.jpeg",
    description: "src",
  },
  {
    date: 25,
    icon: IconChristmasTree,
    title: "src",
    category: "Patrimoine",
    image: "/images/roesti.jpeg",
    description: "src",
  },
];
