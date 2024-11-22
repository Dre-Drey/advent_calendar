import {
  IconChristmasTree,
  IconCandle,
  IconIceSkating,
  IconDeer,
  IconSnowflake,
  IconSnowman,
  IconChristmasBall,
  IconSleigh,
  Icon,
} from "@tabler/icons-react";

export type CardType = {
  date: number;
  icon: Icon;
  title: string;
  category: CategoryType;
  image: string;
  description: string;
  link?: LinkModal;
};

export type LinkModal = {
  url: string;
  text: string;
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
    link: {
      url: "https://www.fcsion.ch/fr/historique-du-club/",
      text: "L'histoire du club sur le site du FC Sion",
    },
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
    title: "Le tir en campagne",
    category: "Patrimoine",
    image: "/images/tir_federal.jpg",
    description:
      "Plus de deux millions d'armes à feu sont stockées dans les foyers suisses. En effet, le système de milice suisse permet aux citoyens suisses ayant fait leur école de recrue de conserver leur arme militaire chez eux. La Suisse possède par ailleurs une tradition du tir très forte, attachée à la figure de Guillaume Tell. 136'000 tireurs et tireuses s’entrainent régulièrement, la vie associative autour de cette activité est riche, avec de nombreux événements et rituels : la fête fédérale du tir, le Knabenschiessen (« Tir des garçons ») et le Tir fédéral en campagne, plus grand festival du tir au monde.",
  },
  {
    date: 8,
    icon: IconIceSkating,
    title: "Les Läckerlis de Bâle",
    category: "Recettes",
    image: "/images/lackerlis.webp",
    description:
      "les Läckerlis sont des biscuits aux épices de la région de Bâle. Le secret de cette recette réside dans le mélange des épices et le travail de la pâte qui devient extrêmement dure (plus d’un robot pâtissier a rendu l’âme sur des Läckerlis, prenez garde). Pour 45 biscuits, il vous faudra 175g de farine et 150g de farine complète, 75g de sucre. Pour les épices: de la cannelle, du clous de girofle moulu, du gingembre moulu, de la noix de muscade moulue, du miel, ainsi que 100g d’amandes effilées, 45g de gingembre confit et 50g d’écorces d’orange confites. Commencez par mélanger les 2 farines, 1cc de cannelle, 1/4cc de clous de girofle et de muscade et un peu de sel. Dans un autre bol, mélangez le sucre et le miel au bain marie avec un 1 cs de kirsch et versez dans le bol contenant les épices. Mélangez jusqu’à obtenir une pâte homogène. Ajoutez les ingrédients restants (gingembre, écorces d’orange, etc.). Abaissez la pâte et faites des grands rectangles. Mettez-les au réfrigérateur pendant 1h au minimum. Pour la cuisson : au four a 200 degrés pendant 10-15 minutes, jusqu’à ce que ca brunisse. Une fois sortis du four, vous pouvez les recouvrir d’un glacage ou les laisser nature.",
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
      "Étonnant dans un pays considéré comme extrêmement cher (Zürich parade régulièrement dans le top 3 des villes les plus chères du monde), mais les université suisses sont peu chères pour les étudiant.e.s nationaux, proportionnellement au coût de la vie helvétique. Etudier à Genève vous coutera 500CHF par semestre, à Lausanne 580CHF et à Zurich 700CHF et à Berne 800CHF.",
  },
  {
    date: 11,
    icon: IconDeer,
    title: "Décevoir en bien",
    category: "Mots suisses",
    image: "/images/decu_en_bien.png",
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
    description:
      "Le Rivella est une boisson à base de sérum de lait créée en 1950 dans le canton de Zürich en Suisse. Dès 1958, la marque lance des déclinaisons de la marque originale: le Rivella bleu, moins calorique, le Rivella vert, avec de l’extrait de thé vert. La marque fait partie du paysage suisse, notamment par sa forte implication dans son soutien au sport suisse : elle conclue rapidement des contrats publicitaires avec l’équipe suisse de ski, soutient la promotion du sport en général en Suisse en subventionnant les associations et organisant des opérations dans les écoles. Bref, Rivella est partout.",
  },
  {
    date: 14,
    icon: IconSnowman,
    title: "Les meringues",
    category: "Recettes",
    image: "/images/meringues.webp",
    description:
      "La Suisse adore sa meringue. Dans les cantons romands, selon la tradition de Fribourg, on sert la meringue avec de la double crème de Gruyère (pas le fromage, la région). Pour 12 meringues, versez 3 blancs d’oeufs dans un bol et montez-les en neige. Ajoutez progressivement 170g de sucre en continuant de fouetter. Le mélange final doit être épais et brillant. Remplissez une poche à douille avec ce mélange et façonnez 12 meringues d’environ 9cm de longueur. Mettez au four a 100 degrés, pendant 2h en laissant la porte du four légèrement entrouverte afin que l’humidité s’echappent et que les meringues soient parfaitement sèches.",
  },
  {
    date: 15,
    icon: IconIceSkating,
    title: "Le glacier d'Aletsch",
    category: "Randonnées",
    image: "/images/aletsch_chris_henry.avif",
    description:
      "C’est une randonnée suisse incontournable : le glacier d’Aletsch est le plus grand glacier des Alpes (20km), classé au patrimoine mondial de l’UNESCO. Vous pourrez l’observer depuis plusieurs points de vue. Celui dont vous verrez la majorité des photos est l’Eggishorn à 2926m d’altitude. Il vous faudra rejoindre le village de Fiesch, en Valais, et prendre un téléphérique jusqu’à Fiesheralp où vous attend un itinéraire de 10km aller-retour pour atteindre le sommet de l’Eggishorn. Si la randonnée ne vous tente pas, vous pouvez atteindre ce sommet par un deuxième télécabine depuis Fiesheralp (attention, le prix des deux télécabines coûte environ 50CHF).",
  },
  {
    date: 16,
    icon: IconChristmasBall,
    title: "Faible taux d'obésité",
    category: "Fun Fact",
    image: "/images/chocolat_Thomas_Franke.avif",
    description:
      "La Suisse possède un des plus faibles taux d’obésité d’Europe (8,1% en 2022 contre 12,2% pour la France ou 15.8% pour l’Allemagne) et ce malgré un autre record: la consommation de chocolat et de fromage par habitant parmi le plus élevées du monde. Les Suisses mangent en effet 11kg de chocolat en moyenne par personne (chiffres de 2022) contre 7,3 kg pour la France et 9kg pour l’Allemagne.",
  },
  {
    date: 17,
    icon: IconChristmasTree,
    title: "La fourre de duvet",
    category: "Mots suisses",
    image: "/images/duvet_engin_akyurt.avif",
    description:
      "Apprenez deux mots suisses pour le prix d’un grâce à l’expression « fourre de duvet » : une « fourre » désigne tout ce qui enveloppe quelque chose d’autre (une poche, une protection, une housse, etc.). On dira ainsi une fourre de téléphone, une fourre pour mettre vos documents administratifs, ou une fourre pour votre couette ! En effet, le « duvet » est bien le synonyme de la « couette » française.",
  },
  {
    date: 18,
    icon: IconDeer,
    title: "La fermeture éclair",
    category: "Inventions",
    image: "/images/femeture_eclair.avif",
    description:
      "Martin Winterhalter (1889-1961) lance en 1925, sous la marque « Riri », la fermeture éclair moderne faite de nervures et de rainures. Un nouveau développement du principe précédent de boules et de mâchoires. Le nouveau système de fermeture a pu être produit en série, a connu un énorme succès et a fait la fortune de Winterhalter. Au fil des années, la concurrence internationale à bas prix a fait irruption dans l'entreprise. Aujourd'hui, Riri produit dans la maison mère tessinoise des fermetures à glissière pour des marques connues.",
  },
  {
    date: 19,
    icon: IconSleigh,
    title: "Dèvígje-thù lo patouè ?",
    category: "Patrimoine",
    image: "/images/patois.jpg",
    description:
      "Le patois suisse, ou plutôt les patois, est encore parlé dans de nombreuses régions de Suisse romande. Le patois local a ainsi résisté aux volonté d’éradication et d’homogénéisation du français. C’est notamment le cas des patois évolénards en Valais, ajoulots au Jura ou gruyériens à Fribourg. Depuis quelques années, il connait même un regain de vivacité, puisqu’il a été introduit dans certains écoles et est de plus en plus étudié par la communauté scientifique qui gère un Glossaire des Patois suisses romands (GPSR) à l’Université de Neuchâtel.",
  },
  {
    date: 20,
    icon: IconSnowflake,
    title: "Le Flon de Savièse",
    category: "Recettes",
    image: "/images/flon_saviese.webp",
    description:
      "Le flon, pas flan, est une tarte aux pommes façon crumble avec de la pâte émiettée en dessous ET au-dessus des fruits ! Il faudra une pâte à tarte (déjà faite ou maison) et pour le sablé : 125g de sucre, 100g de farine, 100g de beurre fondu, et un peu de cannelle et de sel. Mélangez la farine, le sucre, la cannelle et le sel. Ajoutez le beurre et travaillez la pâte jusqu’à obtenir un mélange homogène friable. Coupez les pommes en fines tranches et mélangez-les à la pâte du sablé. Parsemez le fond de tarte de sablé sucré, disposez les pommes sur la tarte et enfournez pendant 35-45 minutes à 180 degrés.",
  },
  {
    date: 21,
    icon: IconSnowman,
    title: "Le Schäfler, Appenzell",
    category: "Randonnées",
    image: "/images/schafler.webp",
    description:
      "Pour cette randonnée, direction la partie germanophone de la Suisse dans le canton d’Appenzell. Pour cette randonnée plutôt facile, vous rejoindrez la cabane du Schâfler à 1924m d’altitude par un sentier de 2,6km. Vous pouvez choisir de revenir en reprenant le téléphérique ou de redescendre par l’autre versant de la montagne, côté Seealpsee (en direction du lac, donc, pour les non germanophones) pour retrouver votre point de départ à Wasserauen (début du télécabine). Le tout fera 10km. Nous vous conseillons de faire cela au coucher du soleil (avec prudence et un bon équipement bien sur), car la lumière et la vue sont à couper le souffle.",
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
    title: "Les merveilles",
    category: "Recettes",
    image: "/images/merveilles.avif",
    description:
      "Les merveilles sont des biscuits tuiles qui se dégustent pendant la période de carnaval. On les trouve dans tous les commerces suisses pendant cette période mais leur confection demande de l’habileté ! Pour 14 merveilles, il vous faudra 25g de beurre, 3 œufs, 0,75 dl de crème , 2cs de sucre et 320 g de farine. Faites fondre le beurre et le laisser refroidir, mélangez les œufs, la crème, le sucre et une pincée de sel. Ajoutez la farine ainsi que le beurre et pétrir le tout jusqu'à obtention d'une pâte lisse et souple. Laissez-la reposer env. 30 min à couvert et à température ambiante. Divisez la pâte en portions d'env. 40 g. Et abaissez-les en disques aussi fins que possible. Se fariner les mains, soulever la pâte en la prenant au-dessous et l'étirer délicatement du centre vers l'extérieur pour la rendre encore plus fine. Vous devez voir à travers !! Chauffez de l'huile à env. 180 °C dans une grande casserole et faites frire les merveilles une à une durant 3-5 min jusqu'à ce qu'elles soient dorées de part et d'autre. Egouttez-les sur du papier absorbant, laissez refroidir puis saupoudrez de sucre glace.",
  },
];
