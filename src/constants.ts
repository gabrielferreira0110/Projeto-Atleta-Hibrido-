import { Workout } from "./types";

export const WORKOUTS: Workout[] = [
  {
    id: "A",
    title: "TREINO A",
    subtitle: "SUPERIORES COMPLETO",
    blocks: [
      {
        id: 1,
        type: "AQUECIMENTO",
        title: "BLOCO 01 - AQUECIMENTO",
        description: "AQUECIMENTO/MOBILIDADE PRÉ TREINO DE SUPERIORES",
        interval: "1 Min",
        videos: [{ url: "https://www.youtube.com/embed/M8goKw7_-tU" }],
      },
      {
        id: 2,
        type: "BI-SET",
        title: "BLOCO 02 - BI-SET",
        description: "3 X 15 CRUCIFIXO RETO + 15 ELEVAÇÃO LATERAL",
        interval: "90 Seg",
        videos: [{ url: "https://www.youtube.com/embed/XwT-yKjAcvI" }],
      },
      {
        id: 3,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 03 - META DE REPETIÇÃO",
        description: "3 X 15 REMADA BAIXA",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/KuQ1dIEfDIk" }],
      },
      {
        id: 4,
        type: "BI-SET",
        title: "BLOCO 04 - BI-SET",
        description: "3 X 15 PUXADA ALTA + 15 ELEVAÇÃO FRONTAL",
        interval: "90 Seg",
        videos: [{ url: "https://www.youtube.com/embed/2rXo5RgfUwk" }],
      },
      {
        id: 5,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 05 - META DE REPETIÇÃO",
        description: "3 X 15 DESENVOLVIMENTO ARNOLD",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/W9YyGiSkmQI" }],
      },
    ],
  },
  {
    id: "B",
    title: "TREINO B",
    subtitle: "MEMBROS INFERIORES",
    blocks: [
      {
        id: 1,
        type: "AQUECIMENTO",
        title: "BLOCO 01 - AQUECIMENTO",
        description: "FLEXIBILIDADE E MOBILIDADE INFERIORES + 3 X 15 AGACHAMENTO C/ PESO DO CORPO",
        interval: "45 Seg",
        videos: [
          { label: "Mobilidade", url: "https://www.youtube.com/embed/sBJK1MU1JGg" },
          { label: "Agachamento", url: "https://www.youtube.com/embed/oM4dQnw2r44" }
        ],
      },
      {
        id: 2,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 02 - META DE REPETIÇÃO",
        description: "3 X 15 AGACHAMENTO HACK",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/rRts63f3lpg" }],
      },
      {
        id: 3,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 03 - META DE REPETIÇÃO",
        description: "3 X 15 CADEIRA EXTENSORA",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/I_s_nJzuIt0" }],
      },
      {
        id: 4,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 04 - META DE REPETIÇÃO",
        description: "3 X 15 MESA FLEXORA",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/0puAmlxM_i8" }],
      },
      {
        id: 5,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 05 - META DE REPETIÇÃO",
        description: "3 X 15 LEG PRESS 45",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/dqqu74zI9RE" }],
      },
      {
        id: 6,
        type: "BI-SET",
        title: "BLOCO 06 - BI-SET",
        description: "3 X 15 CADEIRA ABDUTORA + 15 PANTURRILHA EM PÉ",
        interval: "90 Seg",
        videos: [
          { label: "Abdutora", url: "https://www.youtube.com/embed/Rg25JFpGLGg" },
          { label: "Panturrilha", url: "https://www.youtube.com/embed/SsNlVHY15Xs" }
        ],
      },
    ],
  },
  {
    id: "C",
    title: "TREINO C",
    subtitle: "HIIT ABDOMINAL",
    blocks: [
      {
        id: 1,
        type: "REALIZAR 2 VEZES",
        title: "BLOCO 01 - REALIZAR 2 VEZES",
        description: "CIRCUITO: ABDOMINAL CRUNCH, ELEVAÇÃO PERNAS, ABDOMINAL REMADOR, PRANCHA ABDOMINAL",
        interval: "10 Seg",
        videos: [{ label: "Circuito", url: "https://www.youtube.com/embed/dL8YAQLmKDY" }],
      },
    ],
  },
  {
    id: "D",
    title: "TREINO D",
    subtitle: "MEMBROS INFERIORES",
    blocks: [
      {
        id: 1,
        type: "AQUECIMENTO",
        title: "BLOCO 01 - AQUECIMENTO",
        description: "FLEXIBILIDADE E MOBILIDADE INFERIORES + 3 X 15 AGACHAMENTO C/ PESO DO CORPO",
        interval: "45 Seg",
        videos: [
          { label: "Mobilidade", url: "https://www.youtube.com/embed/tEksXMG96lA" },
          { label: "Agachamento", url: "https://www.youtube.com/embed/gYsf4QlZTT8" }
        ],
      },
      {
        id: 2,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 02 - META DE REPETIÇÃO",
        description: "3 X 15 AGACHAMENTO SUMÔ",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/Rg25JFpGLGg" }],
      },
      {
        id: 3,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 03 - META DE REPETIÇÃO",
        description: "3 X 15 ELEVAÇÃO PÉLVICA",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/tngY5FrF5MQ" }],
      },
      {
        id: 4,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 04 - META DE REPETIÇÃO",
        description: "3 X 15 CADEIRA ABDUTORA",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/sBJK1MU1JGg" }],
      },
      {
        id: 5,
        type: "META DE REPETIÇÃO",
        title: "BLOCO 05 - META DE REPETIÇÃO",
        description: "3 X 15 CADEIRA FLEXORA",
        interval: "45 Seg",
        videos: [{ url: "https://www.youtube.com/embed/oM4dQnw2r44" }],
      },
    ],
  },
];
