import {IForm} from "./form";
import {IQuestion} from "./question";

export interface IFormQuestion {
    form_id: IForm
    question_id: IQuestion
}
