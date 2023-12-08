import {IPatient} from "./patient";
import {IForm} from "./form";

export interface IRehabProgram {
    id: number
    patient_id: IPatient
    doctor_id: number
    is_current: boolean
    start_date: string
    end_date: string
    start_form_id: IForm
    end_form_id: IForm
}
