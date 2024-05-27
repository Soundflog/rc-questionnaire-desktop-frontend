import {IPassport} from "../pasport";

export interface IPatient {
  id?: number
  firstName: string
  middleName: string
  lastName: string
  birthDate: string
  address: string
  phoneNumber: number
  workPlaceData: string
  snils: number
  polis: number
  bookmark: string
  patientStatus: string
}

export enum PatientStatus {
  Active = 'Нуждается в реабилитации',
  Inactive = 'Проходит реабилитацию',
  Archived = 'Проходил реабилитацию ранее',
}
