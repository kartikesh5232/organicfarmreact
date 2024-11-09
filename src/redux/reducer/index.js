import handleBasket from "./handleBasket";
import { combineReducers } from "redux";
import Profile from "./profile";

const rootReducers=combineReducers({
    handleBasket,Profile,
})

export default rootReducers;