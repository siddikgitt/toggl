import { combineReducers, legacy_createStore, applyMiddleware}  from "redux";
import thunk from    "redux-thunk"
import { authReducer } from "./auth/auth.reducer";
import { authSignupReducer } from "./authSignup/authSignup.reducer";

const rootReducer = combineReducers({
 auth: authReducer,
 authSignup: authSignupReducer
})

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))