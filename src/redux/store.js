import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    
});
