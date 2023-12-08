import {IRehabProgram} from "./rehab_program";

export interface IModule {
    id: number
    name: string
    rehab_program_id: IRehabProgram
}
