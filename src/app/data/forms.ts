import {IForm} from "../models/form";
import {IScale} from "../models/scale";

export const forms: IForm[] = [
  {
    id: 1,
    name: "Анкета 1",
    description: "Описание анкеты 1",
    scale_id: {
      id: 1,
      name: "scale name",
      description: "description scale name"
    },
    questions: [
      {
        id: 1,
        content: "QUESTION1",
        variants: [
          {
            id: 1,
            content: "Variant 1",
            answer: false
          },
        ]
      },
      {
        id: 2,
        content: "QUESTION2",
        variants: [
          {
            id: 2,
            content: "Variant 2",
            answer: false
          },
          {
            id: 3,
            content: "Variant 3",
            answer: false
          },
        ]
      },
      {
        id: 3,
        content: "QUESTION3",
        variants: [
          {
            id: 4,
            content: "Variant 4",
            answer: false
          },
          {
            id: 5,
            content: "Variant 5",
            answer: false
          },
          {
            id: 6,
            content: "Variant 6",
            answer: false
          }
        ]
      },
      {
        id: 4,
        content: "QUESTION4",
        variants: [
          {
            id: 7,
            content: "Variant 7",
            answer: false
          },
          {
            id: 8,
            content: "Variant 8",
            answer: false
          },
          {
            id: 9,
            content: "Variant 9",
            answer: false
          },
          {
            id: 10,
            content: "Variant 10",
            answer: false
          }
        ]
      },
    ]
  },
  {
    id: 2,
    name: "Анкета 2",
    description: "Описание анкеты 2",
    scale_id: {
      id: 1,
      name: "scale name",
      description: "description scale name"
    },
    questions: []
  },
  {
    id: 3,
    name: "Анкета 3",
    description: "Описание анкеты 3",
    scale_id: {
      id: 1,
      name: "scale name",
      description: "description scale name"
    },
    questions: []
  }
]
