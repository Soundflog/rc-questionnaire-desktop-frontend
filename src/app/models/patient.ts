export interface IPatient {
  id?: number
  patient_code: number
  first_name: string
  middle_name: string
  last_name: string
  birth_date: string
  death_date: string
  address: string
  phone_number: number
  work_place_data: string
  bookmark: string
  snils: number
  passport:{
    series: number
    number: number
    issued_by: string
    issued_date: string
  }
  polis: number
}
