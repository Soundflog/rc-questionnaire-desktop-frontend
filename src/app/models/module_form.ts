import {IPatient} from "./patient";
import {IForm} from "./form";
import {IModule} from "./module";
import {IBlock} from "./block";

export interface IModuleForm {
    id: number
    form_id: IForm
    module_id: IModule
    block_id: IBlock
}
