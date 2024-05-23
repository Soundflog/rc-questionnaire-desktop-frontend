import {IVariant} from "./variant";

export interface IQuestion {
  id: number
  content: string
  required: boolean | false
  type: QuestionType
  variants: IVariant[]
}

export enum QuestionType {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  SCALE = "SCALE",
}
