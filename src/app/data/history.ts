import {IForm} from "../models/form";
import {IHistoryResponse} from "../models/response/history/historyResponse";

export const histories: IHistoryResponse[] = [
  {
    startDate: "2024-06-06",
    endDate: "2024-06-07",
    protocols:[
      {
        scalesResult: "1",
        rehabResult: "1",
        recommendations: "Рекомендации врача-реабилитолога для Вас составлены и представлены в данном тексте",
        rehabDiagnosis: "Самый длинный диагноз на планете Земля из всех планет в солнечной системе",
      }
    ]
  },
  {
    startDate: "2024-06-07",
    endDate: "2024-06-08",
    protocols:[
      {
        scalesResult: "2",
        rehabResult: "2",
        recommendations: "Reccommended2",
        rehabDiagnosis: "Diagnosis2"
      }
    ]
  }
]
