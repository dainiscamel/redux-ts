import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// createstore에 reducer, initialstate,middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
