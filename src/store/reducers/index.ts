// @flow
import { combineReducers } from 'redux';
import webviewerReducer from "../slices/webviewerSlice";
import demoReducer from "../slices/demoSlice";

const rootReducer = combineReducers({
    webviewer: webviewerReducer,
    demo: demoReducer
});

export default rootReducer;