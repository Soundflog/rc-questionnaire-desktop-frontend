import {IScale} from "./scale";

export interface IForm {
    id: number
    name: string
    description: string
    scale_id: IScale
}
