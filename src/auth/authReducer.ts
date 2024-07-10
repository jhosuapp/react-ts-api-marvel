import { typesAuth } from '../types/index';
import { AuthAction } from '../models/index';


const authReducer = (state = {}, action: AuthAction) => {
    switch (action.type) {
        case typesAuth.login:
            return {
                ...action.payload,
                logged: true
            }
        case typesAuth.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}

export { authReducer }