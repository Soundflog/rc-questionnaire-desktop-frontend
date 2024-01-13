import {createAction, props} from '@ngrx/store';
import {ActionTypes} from "../actionTypes";
import {ILoginRequest} from "../../auth/loginRequest.interface";
import {ICurrentUser} from "../../shared/types/currentUser";
import {HttpBackend} from "@angular/common/http";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: ILoginRequest}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: HttpBackend}>()
)
