import {IPassport} from "./pasport";
import {IPatientStatus} from "./patientstatus";

export interface IPatient {
  id?: number
  first_name: string
  middle_name: string
  last_name: string
  birthDate: string
  address: string
  phone_number: number
  workPlaceData: string
  bookmark: string
  snils: number
  polis: number
  patientStatus: IPatientStatus
  passport: IPassport
}

// {
//     "id": 5,
//     "patientCode": 1007,
//     "firstName": "Ольга",
//     "middleName": "Сергеевна",
//     "lastName": "Кузнецова",
//     "birthDate": "1975-06-30",
//     "address": "ул. Гагарина, д. 8, кв. 12, Нижний Новгород",
//     "phoneNumber": "5553333",
//     "workPlaceData": "РЖД",
//     "snils": "45678901234",
//     "polis": "5678901234567890",
//     "patientStatus": {
//         "id": 1,
//         "name": "Нуждается в реабилитации"
//     },
//     "passport": {
//         "id": 3,
//         "series": "4567",
//         "number": "890123",
//         "issuedDate": "2007-11-05",
//         "issued": "Отделение УФМС по г. Нижний Новгороду"
//     }
// }
