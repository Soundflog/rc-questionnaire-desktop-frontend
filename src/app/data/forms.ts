import {IForm} from "../models/form";
import {IScale} from "../models/scale";

export const forms: IForm[] = [
    {
        id: 1,
        name: "Анкета 1",
        description: "Описание анкеты 1",
        scale_id: {
            id: 1,
            name: "scale name",
            description: "description scale name"
        },
    },
    {
        id: 2,
        name: "Анкета 2",
        description: "Описание анкеты 2",
        scale_id: {
            id: 1,
            name: "scale name",
            description: "description scale name"
        },
    },
    {
        id: 3,
        name: "Анкета 3",
        description: "Описание анкеты 3",
        scale_id: {
            id: 1,
            name: "scale name",
            description: "description scale name"
        },
    }
    ]
