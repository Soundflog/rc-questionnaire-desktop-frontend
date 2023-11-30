import {IPatient} from '../models/patient'

export const patients: IPatient[] = [
  {
    id: 1,
    patient_code: 124125,
    first_name: 'Иван',
    middle_name: 'Иванович',
    last_name: 'Иванов',
    birth_date: '12.12.1990',
    death_date: '12.12.1990',
    address: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    phone_number: 88005553535,
    work_place_data: 'Молокозавод на ул. Ленина, ст. 5',
    bookmark: 'Боли в животе',
    snils: 124125,
    passport:{
      series: 124125,
      number: 124125,
      issued_by: 'УФМС России по г. Москве',
      issued_date: '12.12.2021',
    },
    polis: 124125,
  }
  ,
  {
    id: 2,
    patient_code: 124125,
    first_name: 'Алексей',
    middle_name: 'Иванович',
    last_name: 'Алексеев',
    birth_date: '01.09.2001',
    death_date: '12.12.2023',
    address: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    phone_number: 88005553535,
    work_place_data: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    bookmark: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    snils: 124125,
    passport:{
      series: 124125,
      number: 124125,
      issued_by: 'г. Москва, ул. Ленина, д. 1, кв. 1',
      issued_date: '12.12.1990',
    },
    polis: 124125,
  }
]
