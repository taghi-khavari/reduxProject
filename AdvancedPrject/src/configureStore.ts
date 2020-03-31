import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

export default function configureStore(preLoadedState?: any){
  return createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}