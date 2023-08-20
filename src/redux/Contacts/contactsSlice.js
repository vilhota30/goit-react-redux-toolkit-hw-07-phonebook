import {createSlice} from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
        changeContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload.id);
            state.splice(index, 1, action.payload);
        }
    },
});

export const contactsReducer = contactsSlice.reducer;

export const {addContact, deleteContact, changeContact} = contactsSlice.actions;