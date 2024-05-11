import {IPatient} from '../models/patient'

export const patients: IPatient[] = [
  {
    id: 1,
    first_name: 'Иван',
    middle_name: 'Иванович',
    last_name: 'Иванов',
    birthDate: '12.12.1990',
    address: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    phone_number: 88005553535,
    workPlaceData: 'Молокозавод на ул. Ленина, ст. 5',
    bookmark: 'Боли в животе',
    snils: 124125,
    patientStatus: {
      id: 1,
      name: 'Нуждается в реабилитации',
    },
    passport:{
      series: 124125,
      number: 124125,
      issued: 'УФМС России по г. Москве',
      issuedDate: '12.12.2021',
    },
    polis: 124125,
  }
  ,
  {
    id: 2,
    first_name: 'Алексей',
    middle_name: 'Иванович',
    last_name: 'Алексеев',
    birthDate: '01.09.2001',
    address: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    phone_number: 88005553535,
    workPlaceData: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    bookmark: 'г. Москва, ул. Ленина, д. 1, кв. 1',
    snils: 124125,
    patientStatus: {
      id: 1,
      name: 'Нуждается в реабилитации',
    },
    passport:{
      id: 1,
      series: 124125,
      number: 124125,
      issued: 'г. Москва, ул. Ленина, д. 1, кв. 1',
      issuedDate: '12.12.1990',
    },
    polis: 124125,
  }
]
