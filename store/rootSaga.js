import { all } from "redux-saga/effects";

import AppSaga from "./app/saga";
import ShopSaga from "./shop/saga";
import Ecomerce from "./ecomerce/saga";

export default function* rootSaga() {
    yield all([AppSaga(), ShopSaga(), Ecomerce()]);
}
