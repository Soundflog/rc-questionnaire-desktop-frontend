import {IScale} from "./scale";
import {IAnswer} from "./answer";
import {IVariant} from "./variant";
import {IQuestion} from "./question";

export interface IForm {
    id?: number
    name: string
  isAnswered: boolean
    description: string
    scale: IScale
  questions: IQuestion[]
    // scale_id: number
}
