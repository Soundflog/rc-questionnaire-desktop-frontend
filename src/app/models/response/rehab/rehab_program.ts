import {IModuleShort} from "./moduleShort";
import {IProgramFormShort} from "./programFormShort";

export interface IRehabProgram {
  id: number
  isCurrent: boolean
  startDate: string
  endDate: string
  programFormResponses: IProgramFormShort[]
  moduleShortResponses: IModuleShort[]
}
