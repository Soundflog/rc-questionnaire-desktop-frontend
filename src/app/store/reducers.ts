import {AuthStateInterface} from "../auth/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {loginAction} from "./action/login.action";
import {state} from "@angular/animations";

const initialState: AuthStateInterface = {
  isSubmitting: false
}

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
  })
  )
)

export function reducer(state: AuthStateInterface, action: Action){
  return authReducer(state, action)
}
