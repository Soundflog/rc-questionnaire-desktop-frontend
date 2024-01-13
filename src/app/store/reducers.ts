import {AuthStateInterface} from "../auth/types/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {loginAction, loginFailureAction, loginSuccessAction} from "./action/login.action";
import {state} from "@angular/animations";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
  })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducer(state: AuthStateInterface, action: Action){
  return authReducer(state, action)
}
