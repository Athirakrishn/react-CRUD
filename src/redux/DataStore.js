import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice"; 

const DataStore = configureStore({
  reducer: {
    data: dataReducer, 
  },
});

export default DataStore;