import {IScale} from "../../scale";
import {IQuestion} from "../../question";

export interface IProgramFormShort {
  id: number
  name: string
  description: string
  typeName: ProgramFormType
  finishedAt: string
}

export enum ProgramFormType {
  IN = "Вводная анкета",
  OUT = "Выходная анкета",
}
