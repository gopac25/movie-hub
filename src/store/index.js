import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "../reducers";
const initialState = {};
const store = createStore(
   RootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(thunk))
);
export default store;
