import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "../auth/types/authState.interface";

export const authFeatureSelector = createFeatureSelector<
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
