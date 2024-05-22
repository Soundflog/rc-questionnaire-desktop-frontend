import {IHistoryProtocolResponse} from "./historyProtocolResponse";

export interface IHistoryResponse {
  startDate: string
  endDate: string
  protocols: IHistoryProtocolResponse[]
  // scale_id: number
}
