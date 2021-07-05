import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { foodStoreReducer } from "../reducers/reducers.js";
import thunk from "redux-thunk";

const foodStore = createStore(foodStoreReducer,  composeWithDevTools(applyMiddleware(thunk)));

export default foodStore