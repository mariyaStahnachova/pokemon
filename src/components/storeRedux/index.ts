import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./mainReducer";
import thunk from "redux-thunk";


const mainReducer = combineReducers({
    app:appReducer
})

const store = createStore(mainReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof mainReducer>

export default store
