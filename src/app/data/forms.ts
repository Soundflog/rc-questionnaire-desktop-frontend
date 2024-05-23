import {IForm} from "../models/form";
import {IScale} from "../models/scale";
import {QuestionType} from "../models/question";

export const forms: IForm[] = [
  {
    id: 1,
    name: "Анкета 1",
    description: "Описание анкеты 1",
    scale: {
      id: 1,
      name: "scale name",
      description: "description scale name"
    },
    questions: [
      {
        id: 1,
        content: "QUESTION1",
        type: QuestionType.SINGLE_CHOICE,
        required: false,
        variants: [
          {
            id: 1,
            content: "Variant 1",
            score: 1.00,
            isAnswered: false
          },
        ]
      },
      {
        id: 2,
        content: "QUESTION2",
        type: QuestionType.SINGLE_CHOICE,
        required: false,
        variants: [
          {
            id: 2,
            content: "Variant 2",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 3,
            content: "Variant 3",
            score: 1.00,
            isAnswered: false
          },
        ]
      },
      {
        id: 3,
        content: "QUESTION3",
        type: QuestionType.SCALE,
        required: false,
        variants: [
          {
            id: 4,
            content: "Variant 4",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 5,
            content: "Variant 5",
            score: 2.00,
            isAnswered: false
          },
          {
            id: 6,
            content: "Variant 6",
            score: 3.00,
            isAnswered: false
          },
          {
            id: 7,
            content: "Variant 7",
            score: 4.00,
            isAnswered: false
          },
          {
            id: 8,
            content: "Variant 8",
            score: 5.00,
            isAnswered: false
          }
        ]
      },
      {
        id: 4,
        content: "QUESTION4",
        type: QuestionType.MULTIPLE_CHOICE,
        required: false,
        variants: [
          {
            id: 9,
            content: "Variant 7",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 10,
            content: "Variant 8",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 11,
            content: "Variant 9",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 12,
            content: "Variant 10",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 13,
            content: "Variant 11",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 14,
            content: "Variant 14",
            score: 1.00,
            isAnswered: false
          },
          {
            id: 15,
            content: "Variant 15",
            score: 1.00,
            isAnswered: false
          }
        ]
      },
    ]
  },
  {
    id: 2,
    name: "Анкета 2",
    description: "Описание анкеты 2",
    scale: {
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
    scale: {
      id: 1,
      name: "scale name",
      description: "description scale name"
    },
    questions: []
  }
]
