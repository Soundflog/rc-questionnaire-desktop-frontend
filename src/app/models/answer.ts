import {IPatient} from "./response/patient";
import {IVariant} from "./variant";

export interface IAnswer {
    id: number
    patient_id: IPatient
    variant_id: IVariant
    answered_at: string
}
