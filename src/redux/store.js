// import React from 'react';
// import { createStore } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import reducer from "./reducers/index.js";

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
