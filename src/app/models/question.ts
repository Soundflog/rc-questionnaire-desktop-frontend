import {IVariant} from "./variant";

export interface IQuestion {
    id: number
    content: string
    variants: IVariant[]
}
