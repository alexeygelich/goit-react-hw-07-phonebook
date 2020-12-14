import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});

export default store;
