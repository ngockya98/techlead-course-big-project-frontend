import { combineReducers } from "redux";
import app from "./app/reducer";
import shop from "./shop/reducer";
import ecomerce from "./ecomerce/reducer";

export default combineReducers({
    app,
    shop,
    ecomerce,
});
