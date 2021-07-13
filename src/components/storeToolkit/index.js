import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {mainReducer} from "./tooklitReduser";
import rootSlice from './toolkitSlice'


const rootReducer = combineReducers({
    app:rootSlice
})

 const store = configureStore({
    reducer:rootReducer
})
export default store