import {IPatient} from "./response/patient";
import {IForm} from "./form";
import {IModuleShort} from "./response/rehab/moduleShort";
import {IBlock} from "./block";

export interface IModuleForm {
    id: number
    form_id: IForm
    module_id: IModuleShort
    block_id: IBlock
}
