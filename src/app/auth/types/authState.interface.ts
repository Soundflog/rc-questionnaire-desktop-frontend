import {ICurrentUser} from "../../shared/types/currentUser";
import {BackendErrorsInterface} from "./BackendErrors.interface";

export interface AuthStateInterface{
  isSubmitting: boolean
  currentUser: ICurrentUser | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null
}
