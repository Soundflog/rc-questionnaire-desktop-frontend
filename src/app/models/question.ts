import {IVariant} from "./variant";

export interface IQuestion {
  id: number
  content: string
  variants: IVariant[]
  type: QuestionType
}

export enum QuestionType {
  MULTIPLE_CHOICE = "multiple_choice",
  SINGLE_CHOICE = "single_choice",
  SCALE = "scale",
}
