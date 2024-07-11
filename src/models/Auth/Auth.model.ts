export type AuthActionTypes = '[auth] login' | '[auth] logout';

export type AuthActionPayloady = { 
    user_name?: string;
    logged?: boolean;
    token?: string
}

export interface AuthAction {
    type: AuthActionTypes;
    payload: AuthActionPayloady,
}