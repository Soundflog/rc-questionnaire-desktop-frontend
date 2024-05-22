import {IPassport} from "../pasport";

export interface IPatient {
  id?: number
  first_name: string
  middle_name: string
  last_name: string
  birthDate: string
  address: string
  phone_number: number
  workPlaceData: string
  snils: number
  polis: number
  bookmark: string
  patientStatus: string
  passport: IPassport
}
