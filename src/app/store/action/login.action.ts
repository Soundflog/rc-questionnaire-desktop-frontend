import {createAction, props} from '@ngrx/store';
import {ActionTypes} from "../actionTypes";
import {ILoginRequest} from "../../models/auth/loginRequest.interface";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<ILoginRequest>()
)
