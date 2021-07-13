import {TypedUseSelectorHook,useSelector} from "react-redux";
import {RootState} from "../components/storeRedux";


export const  useTypedSelector : TypedUseSelectorHook<RootState> = useSelector