import {IScale} from "./scale";
import {IAnswer} from "./answer";
import {IVariant} from "./variant";
import {IQuestion} from "./question";

export interface IForm {
    id: number
    name: string
    description: string
    scale_id: IScale
  questions: IQuestion[]
    // scale_id: number
}
