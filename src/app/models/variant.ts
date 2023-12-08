import {IQuestion} from "./question";

export interface IVariant {
    id: number
    content: string
    score: number
    question_id: IQuestion
}
