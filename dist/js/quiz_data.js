const quizData = [
  {
    number: 1,
    title: "1. Eres…",
    answer_alias: "gender",
    answers: [
      {
        answer_title: "Hombre",
        type: "radio",
      },
      {
        answer_title: "Mujer",
        type: "radio",
      },
    ],
  },
  {
    number: 2,
    title: "2. ¿Cuántos años tienes?",
    answer_alias: "age",
    answers: [
      {
        answer_title: "",
        type: "tel",
      },
    ],
  },
  {
    number: 3,
    title: "3. Indica tu altura y peso.",
    answer_alias: "height_and_weight",
    answers: [
      {
        answer_placeholder: "Altura",
        answer_title: "",
        type: "tel",
      },
      {
        answer_placeholder: "Peso:",
        answer_title: "",
        type: "tel",
      },
    ],
  },
  {
    number: 4,
    title: "4. ¿Cómo es tu estilo de vida?",
    answer_alias: "lifestyle",
    answers: [
      {
        answer_title: "Sedentario",
        type: "radio",
      },
      {
        answer_title: "Moderado",
        type: "radio",
      },
      {
        answer_title: "Activo",
        type: "radio",
      },
    ],
  },
  {
    number: 5,
    title: "5. ¿Qué alimentos forman parte de tu dieta principal? (Puedes seleccionar varios)",
    answer_alias: "ration",
    answers: [
      {
        answer_title: "Carne",
        type: "checkbox",
      },
      {
        answer_title: "Verduras",
        type: "checkbox",
      },
      {
        answer_title: "Cereales",
        type: "checkbox",
      },
      {
        answer_title: "Frutas",
        type: "checkbox",
      },
      {
        answer_title: "Comida rápida",
        type: "checkbox",
      },
    ],
  },
  {
    number: 6,
    title: "6. ¿Cuánto peso te gustaría tener?",
    answer_alias: "desired_weight",
    answers: [
      {
        answer_title: "",
        type: "tel",
      },
    ],
  },
  {
    number: 7,
    title: "7. ¿Cuántos litros de agua bebes al día?",
    answer_alias: "amount_of_water",
    answers: [
      {
        answer_title: "1 litro",
        type: "radio",
      },
      {
        answer_title: "2 litros",
        type: "radio",
      },
      {
        answer_title: "Más de 2 litros",
        type: "radio",
      },
    ],
  },
  {
    number: 8,
    title: "8. ¿Cuántas veces al día comes?",
    answer_alias: "number_of_meals",
    answers: [
      {
        answer_title: "1 vez",
        type: "radio",
      },
      {
        answer_title: "2 veces",
        type: "radio",
      },
      {
        answer_title: "3 veces",
        type: "radio",
      },
      {
        answer_title: "Más de 3 veces",
        type: "radio",
      },
    ],
  },
  {
    number: 9,
    title: "9. ¿Cuántas horas duermes en promedio?",
    answer_alias: "amount_of_sleep",
    answers: [
      {
        answer_title: "4–6 horas",
        type: "radio",
      },
      {
        answer_title: "6–8 horas",
        type: "radio",
      },
      {
        answer_title: "Más de 8 horas",
        type: "radio",
      },
    ],
  },
  {
    number: 10,
    title: "10. ¿Crees que puedes adelgazar?",
    answer_alias: "opinion",
    answers: [
      {
        answer_title: "Sí",
        type: "radio",
        answer_descr: "¡Genial! Una actitud positiva es muy importante en este proceso, ¡y no solo en esto! Con nuestro plan de adelgazamiento, definitivamente lograrás tus objetivos, ¡creemos en ti! Ahora presiona el botón de abajo «obtener mi plan de adelgazamiento» y revísalo detenidamente, este plan te ayudará sin duda a perder peso, ¡y con una mentalidad positiva no hay oportunidad para la obesidad, mucha suerte!"
      },
      {
        answer_title: "No",
        type: "radio",
        answer_descr: "¡Cambia de inmediato a un pensamiento positivo y comienza a creer en ti mismo! Una actitud positiva es muy importante en este proceso, ¡y no solo en esto! Con nuestro plan de adelgazamiento, definitivamente lograrás tus objetivos, ¡creemos en ti! Ahora presiona el botón de abajo «obtener mi plan de adelgazamiento» y revísalo detenidamente, este plan te ayudará sin duda a perder peso, ¡y con una mentalidad positiva no hay oportunidad para la obesidad, mucha suerte!"
      },
    ],
  },
];
