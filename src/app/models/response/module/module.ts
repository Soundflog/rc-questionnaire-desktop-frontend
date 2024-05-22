import {IExerciseShortResponse} from "./exerciseShort";
import {IFormShortResponse} from "./formShort";

export interface IModule {
   name: string,
   finishedAt: string,
   exercises: IExerciseShortResponse[],
   forms: IFormShortResponse[]
}
