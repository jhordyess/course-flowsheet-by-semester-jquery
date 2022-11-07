const semesters = [
  {
    name: "1st semester",
    courses: [
      {
        id: "calc-100",
        name: "Calculus I",
      },
      {
        id: "alg-101",
        name: "Algebra I",
      },
      {
        id: "stat-101",
        name: "Statistics I",
      },
      {
        id: "soft-101",
        name: "Software I",
      },
      {
        id: "his-101",
        name: "History I",
      },
    ],
  },
  {
    name: "2nd semester",
    courses: [
      {
        id: "calc-200",
        name: "Calculus II",
        prerequisites: ["alg-101", "calc-100"],
      },
      {
        id: "sis-201",
        name: "Systems I",
        prerequisites: ["soft-101"],
      },
      {
        id: "dma-101",
        name: "Discrete Mathematics",
      },
    ],
  },
  {
    name: "3rd semester",
    courses: [
      {
        id: "calc-300",
        name: "Calculus III",
        prerequisites: ["calc-200"],
      },
      {
        id: "mic-100",
        name: "Microeconomics",
        prerequisites: ["alg-101", "stat-101"],
      },
      {
        id: "soft-205",
        name: "Software II",
        prerequisites: ["dma-101", "soft-101"],
      },
      {
        id: "sis-301",
        name: "Systems II",
        prerequisites: ["sis-201"],
      },
      {
        id: "opt-301",
        name: "Optional I",
        prerequisites: [
          "calc-100",
          "alg-101",
          "stat-101",
          "his-101",
          "soft-101",
        ],
      },
      {
        id: "opt-302",
        name: "Optional II",
        prerequisites: ["calc-100", "stat-101"],
      },
    ],
  },
  {
    name: "4th semester",
    courses: [
      {
        id: "unk-100",
        name: "Unknow I",
      },
      {
        id: "unk-200",
        name: "Unknow II",
        prerequisites: ["mic-100"],
      },
      {
        id: "unk-300",
        name: "Unknow III",
        prerequisites: ["calc-100", "opt-302"],
      },
    ],
  },
];
export default semesters;
