export type AuthActionTypes = '[auth] login' | '[auth] logout';

export interface AuthAction {
    type: AuthActionTypes;
    payload: ()=> void,
}