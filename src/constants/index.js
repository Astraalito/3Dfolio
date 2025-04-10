import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  git,
  threejs,
  unity,
  unreal,
  cSharp,
  blender,
  java,
  photoshop,
  jira,
  inria,
  thales,
  schneider,
  oldgames,
  brutus,
  artsy,
  brutusBg,
  brutus1,
  brutus2,
  brutus3,
  fasterThanYou,
  showcase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "projects",
    title: "Portfolio",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web et 3D",
    icon: mobile,
  },
  {
    title: "Jeux vidéos et éxperiences immersives",
    icon: web,
  },
  {
    title: "Game Design",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Développeur Unity (Stage)",
    company_name: "INRIA (Institut National de Recherche en Informatique)",
    icon: inria,
    iconBg: "#e63312",
    date: "Janvier 2019 - Mars 2019",
    points: [
      "Développement d'une application XR d'assistance en cuisine au sein de l'équipe Domotique de l'INRIA.",
      "Maquettage et conceptualisation d'une application en réalité mixte.",
      "Réalisation de l'application avec Unity et SteamVR avec comme support un HTC Vive."
    ],
    technologies: "Développement VR: C#, Unity, SteamVR"
  },
  {
    title: "Webmaster (Alternance)",
    company_name: "Thalès (Trixell)",
    icon: thales,
    iconBg: "#27165d",
    date: "Aout 2019 - Aout 2020",
    points: [
      "Gestion et maintenance de l'intranet existant.",
      "Conceptualisation et réalisation d'une nouvelle solution Web pour remplacer l'intranet existant obsolète.",
      "Gestion et pilotage de projet selon les méthodes Agiles (SCRUM)"
    ],
    technologies: "Développement Web: C# (.NET), Java, JavaScript"
  },
  {
    title: "Développeur 3D (Alternance)",
    company_name: "Schneider Electric",
    icon: schneider,
    iconBg: "#3acc61",
    date: "Septembre 2020 - Aout 2022",
    points: [
      "Développement d'un moteur de rendu et de configuration des produits Schneider en 3D sur navigateur.",
      "Modification de l'APÏ relatives aux métadonnées des produits Schneider.",
      "Réalisation en autonomie d'une application AR d'aide à la maintenance de panneaux éléctriques."
    ],
    technologies: "Développement 3D: Java, JS, ThreeJS, Blender"
  },
  {
    title: "Concépteur de Jeu de société",
    company_name: "Old Games",
    icon: oldgames,
    iconBg: "#EADDC0",
    date: "Juin 2024 - Novembre 2024",
    points: [
      "Conception et prototypage du jeu de société BRUTUS! et de ses règles.",
      "Présentation du jeu à des évenements tels que le Festival International du Jeu de Cannes ou la Japan Expo.",
      "Création du site internet de Old-Games et de BRUTUS!"
    ],
    technologies: "GameDesign, Développement Web: React, R3F"
  },
];

const testimonials = [
  {
    testimonial:
      "Les meilleurs sites internet et les meilleurs jeux vidéos que j'ai jamais vu !",
    name: "Ma maman",
    designation: "Matriarche",
    company: "Ma potite maison",
    image: "https://i.etsystatic.com/40574730/r/il/eff68d/4545123276/il_1080xN.4545123276_7vkg.jpg",
  },
];

const projects = [
  // {
  //   name: "[AR]tsy",
  //   type:"Application Immersive",
  //   description:
  //     "[AR]tsy est une application de visualisation d'oeuvre d'art en Réalité Augmentée. Visualisez les plus grands chefs d'oeuvre en taille réelle dans votre salon !",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: artsy,
  //   linkTo: "https://github.com/Astraalito/ARtsy",
  // },
  {
    name: "BRUTUS!",
    type:"Jeu de société",
    description:
      "BRUTUS! est un jeu de société développé en collaboration avec Old-Games ! (15K sur Kickstarter !) J'ai particpé à la conception du jeu et j'ai réalisé leur site internet",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brutus,
    linkTo: "/brutus",
  },
  {
    name: "Faster Than You!!!",
    type:"Jeu vidéo 2D",
    description:
      "Un Party-Game de course entre ami ! Dans Faster Than You!!! Prends de vitesse ton adversaire et sois le dernier joueur à rester sur l'écran.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fasterThanYou,
    linkTo: "https://astraalito.itch.io/faster-than-you",
  },
  {
    name: "Shader Showcase",
    type:"Shaders / GLSL",
    description:
      "Découvrez certains des shaders programmés en GLSL que j'ai pu créer lors de mes différents projets !",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: showcase,
    linkTo: "/shader-showcase",
  },
];

const brutusInfo = {
    title: "BRUTUS!",
    type: "Jeu de société",
    links: "https://old-games-edition.com/fr/brutus",
    imgBg: brutusBg,
    nutshell: "Dans Brutus! chaque joueur incarne un Ludus, une maison de gladiateurs dont la survie dépend des choix avisés de son chef, le Laniste. Utilisez leur capacité unique à votre avantage. Pariez judicieusement sur les combats que vous remporterez : que vos gladiateurs obtiennent les lauriers de la victoire ou perdent misérablement, chacun d'eux vous rapprochera un peu plus de votre ascension.",
    description:[
      {
        title: "Création du jeu",
        text:"La création de notre jeu de société BRUTUS! a été un véritable défi, tant sur le plan créatif que technique. Nous avons voulu concevoir un jeu qui allie stratégie, humour et immersion, en s'inspirant de l'univers des gladiateurs et de l'Antiquité romaine. L'un des enjeux majeurs a été de trouver un équilibre entre la complexité des règles et l'accessibilité pour tous les types de joueurs.",
        image: brutus1
      },
      {
        title: "Présentation et évenements",
        text:"La phase de test a été une étape cruciale dans le développement de BRUTUS!. Nous avons eu la chance de présenter notre jeu à des événements majeurs comme la Japan Expo, le Festival International de Cannes, le FLIP Festival, Imagi'Con et Octogônes. Ces rencontres nous ont permis de recueillir des retours précieux de la part des joueurs. Ces événements ont également été l'occasion de créer une communauté autour de BRUTUS!, de sentir l'enthousiasme des joueurs et de valider que notre jeu répondait à leurs attentes.",
        image: brutus2
      },
      {
        title: "Lancement !",
        text:"Pour le lancement de BRUTUS! nous avons lancé une campagne de pub et fait appel à des influenceurs spécialisés dans les jeux de société, comme LudoChrono. Ensuite, nous avons lancé notre campagne Kickstarter, une étape déterminante pour financer la production du jeu. Nous avons atteint notre objectif de financement en seulement 3 heures ! À la fin de la campagne, nous avions dépassé les 15 000 euros, ce qui nous a permis de prévoir des stretch goals supplémentaires, comme des figurines améliorées et des extensions de jeu.",
        image: brutus3
      },
    ]
}

export { services, technologies, experiences, testimonials, projects, brutusInfo };
