import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { headerReducer} from "./header";

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    header: headerReducer
})