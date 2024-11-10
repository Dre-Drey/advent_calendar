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
    description:
      "Fondé en 1909, le club emblématique du Valais est promu en 1ere ligue suisse en 1944 puis en LNA en 1962 et remporte sa première coupe de Suisse en 1965 : le début du mythe. En effet, en coupe de Suisse, le FC Sion peut se prévaloir de 13 victoires sur 14 matchs. Jusqu’en 2017, le club était invaincu en finale de Coupe de suisse. Il a vu passer quelques internationaux célèbres comme Balotelli ou Gennaro Gattuso, et locaux comme Nestor Clausen. Les Valaisans sont particulièrement attachés à ce club dont l'histoire a dépassé les frontières du canton.",
  },
  {
    date: 2,
    icon: IconIceSkating,
    title: "Le carac",
    category: "Recettes",
    image: "/images/carac.jpeg",
    description:
      "Le carac est une spécialité suisse reconnaissable à son glaçage vert fluo ! Pour faire 12 Caracas, munissez-vous de 12 fonds de tartelettes,  1dl de crème entière, 250g de chocolat noir, 50g de beurre, 200g de sucre glace et, bien évidemment, de colorant alimentaire vert ! Le carac n’étant rien d’autre qu’une bonne tartelette au chocolat, il vous suffira de faire fondre le chocolat dans la crème portée à ébullition, d’y ajouter le beurre et de répartir cette ganache dans les fonds de tartelettes. Pour le glaçage, mélangez votre sucre glace avec de l’eau et ajoutez-y le colorant vert. Recouvrez vos caracs, mettez au frais et voilà !",
  },
  {
    date: 3,
    icon: IconChristmasTree,
    title: "Bella Tola",
    category: "Randonnées",
    image: "/images/Bella-Tola.jpg",
    description:
      "Le Bella Tola (en patois valaisan « Belle terrasse ») est un sommet des Alpes valaisannes qui fait partie du domaine skiable de Saint-Luc/Chandolin. Accessible en été par plusieurs sentiers de randonnée, le sommet culmine à 3025m et vous offrira une vue incroyable sur une grande partie des sommets suisses. La randonnée commence à l’arrivée du funiculaire de St-Luc/Tignousa  : suivez « Lac de Bella Tola » puis les indications aux différents points d’altitude. La totalité du parcours fait environ 12km et est un peu ardu, notamment à cause du fort dénivelé de fin, qui vous emmène au sommet sur 2km et environ 400m de dénivelé. Courage, la vue en vaut la peine.",
  },
  {
    date: 4,
    icon: IconDeer,
    title: "1,5 millions de vaches",
    category: "Fun Fact",
    image: "/images/vaches_d_herens.jpg",
    description:
      "La Suisse est connue pour ses vaches et ce n'est pas pour rien : elle en compte 1,5 millions ce qui amène souvent à dire qu'à certains endroits, il y a davantage de vaches que d'habitants. Elles possèdent de nombreux droits (davantage que dans d'autres pays européens) et certains races sont propres à certains régions. C'est le cas de la vache d'Hérens, connue pour se battre au printemps avant la montée à l'alpage, afin de désigner 'la reine de l'alpage'.",
  },
  {
    date: 5,
    icon: IconSleigh,
    title: "Ça joue ?",
    category: "Mots suisses",
    image: "/images/Ca_joue.png",
    description:
      "Cette expression est un peu « le couteau suisse » des helvétismes : elle s’emploie comme un équivalent de « ca va », ou « ca marche ». Ne vous attendez donc pas à ce qu’on vous propose un jeu quand un Suisse vous pose cette question. Exemple:  « Rendez-vous à midi, ça joue ? », ou « Tiens, Jean ! Ça faisait longtemps ! Ça joue ou bien ? »",
  },
  {
    date: 6,
    icon: IconSnowflake,
    title: "Helvetica",
    category: "Inventions",
    image: "/images/police-helvetica.jpeg",
    description:
      "En 1957, le graphiste et typographe Max Miedinger (1910-1980) créé à Bâle la police standard intemporelle Helvetica. Son élégance fonctionnelle en fait une icône du design suisse. Aujourd'hui, elle fait partie des polices les plus répandues de notre époque : c'est la police des logos d'American Airline, The North Face, Microsoft, Skype ou Nestlé.",
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
    title: "Le bisse de Savièse",
    category: "Randonnées",
    image: "/images/bisse_saviese.webp",
    description:
      "Aussi appelé Bisse du Torrent Neuf, le bisse de Savièse est un bisse valaisan (canal d'irrigation traditionnel) qui achemine l’eau de la Printse jusqu’à Savièse. Construit en 1430, il est long de 8km et offre une balade facile et agréable, avec une vue imprenable sur la vallée du Rhône. Le bisse est accessible en 2h30 environ, pour un dénivelé de 200m. Il vous faudra traverser 3 ponts suspendus et longer la paroi ; si vous êtes sujets au vertige, mieux vaut vous abstenir !",
  },
  {
    date: 10,
    icon: IconSleigh,
    title: "Les universités suisses sont peu chères",
    category: "Fun Fact",
    image: "/images/universite_lausanne.jpeg",
    description:
      "Etonnant dans un pays considéré comme extrêmement cher (Zürich parade régulièrement dans le top 3 des villes les plus chères du monde), mais les université suisses sont peu chères pour les étudiant.e.s nationaux, proportionnellement au coût de la vie helvétique. Etudier à Genève vous coutera 500CHF par semestre, à Lausanne 580CHF et à Zurich 700CHF et à Berne 800CHF.",
  },
  {
    date: 11,
    icon: IconDeer,
    title: "Décevoir en bien",
    category: "Mots suisses",
    image: "/images/decevoir-en-bien.jpeg",
    description:
      "L'expression suisse 'Décevoir en bien' signifie « être étonné d'un résultat qu'on attendait mauvais, mais qui est bon contre toute attente ». Elle permet d’exprimer un contentement, mais retenu : bref, c’est une expression bien suisse. Exemple: Ce film m’a déçu en bien, je m’attendais à un navet!».",
  },
  {
    date: 12,
    title: "L'économe Rex",
    icon: IconSleigh,
    category: "Inventions",
    image: "/images/Econome_rex.webp",
    description:
      "L’économe Rex est inventé en 1947 par Alfred Neweczerzal (1899-1959), il facilite considérablement l’épluchage des légumes. Pommes de terre, carottes ou concombres, cet outil fabuleux en vient à bout en un clin d’œil. À ce jour, ce sont plus de 50 millions d’économes qui ont été vendus dans le monde et le succès semble loin de se démentir.",
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
    title: "Faible taux d'obésité",
    category: "Fun Fact",
    image: "/images/rochers-naye.jpeg",
    description:
      "La Suisse possède un des plus faibles taux d’obésité d’Europe (8,1% en 2022 contre 12,2% pour la France ou 15.8% pour l’Allemagne) et ce malgré un autre record: la consommation de chocolat et de fromage par habitant parmi le plus élevées du monde. Les Suisses mangent en effet 11kg de chocolat en moyenne par personne (chiffres de 2022) contre 7,3 kg pour la France et 9kg pour l’Allemagne.",
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
    description:
      "Martin Winterhalter (1889-1961) lance en 1925, sous la marque « Riri », la fermeture éclair moderne faite de nervures et de rainures. Un nouveau développement du principe précédent de boules et de mâchoires. Le nouveau système de fermeture a pu être produit en série, a connu un énorme succès et a fait la fortune de Winterhalter. Au fil des années, la concurrence internationale à bas prix a fait irruption dans l'entreprise. Aujourd'hui, Riri produit dans la maison mère tessinoise des fermetures à glissière pour des marques connues.",
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
    title: "Les Suisses sont prêts pour la guerre (nucléaire)",
    category: "Fun Fact",
    image: "/images/abri_anti_atomique_Lausanne.webp",
    description:
      "La Suisse est prête pour un risque nucléaire et ce gràce à un re2seau d’abris anti-atomiques sans nul autre pareil dans le monde. Il en existe plus de 360 000 dans toute la Suisse, la plupart des maisons et immeubles en étant équipés. Ils peuvent accueillir l’ensemble de la population et c’est même une obligation fédérale puisque la loi suisse exige que qu’un abri soit mis à disposition de tout citoyen à moins de 30 minutes de son domicile à pied.",
  },
  {
    date: 23,
    icon: IconCandle,
    title: "Le PET et le Sagex",
    category: "Mots suisses",
    image: "/images/PET_recyclage.webp",
    description:
      "En Suisse, on ne dit pas « polystyrène expansé » mais bien Sagex, du nom de la marque fabriquées en Suisse par l’entreprise Sager SA. On ne dit pas non plus plastique, mais PET (prononcez [pète], pour Poly Ethylène Téréphtalate. Exemple: « Tu n’oublieras pas d’apporter les bouteilles en PET au recyclage ». «  Tu aurais du sagex pour caler cet objet dans ce colis ? ».",
  },
  {
    date: 24,
    icon: IconChristmasBall,
    title: "Doodle",
    category: "Inventions",
    image: "/images/Doodle_logo.png",
    description:
      "L’informaticien suisse Myke Näf développe Doodle en 2003 et fonde en 2007, avec Paul Seviç, l'actuelle Doodle AG. Cette start-up suisse devient une référence connait une croissance fulgurante. Aujourd’hui, Doodle comptabilise 30 millions d'utilisateurs chaque mois et 78'000 rendez-vous fixés par jour.",
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
