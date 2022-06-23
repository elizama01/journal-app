import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
}
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSave: '',
        note: [],
        active: []
        // active: {
        //     id: '',
        //     title: '',
        //     body: '',
        //     date: '',
        //     imageUrls: [],
        // }
    },
    reducers: {

        addNewEmptyNote: (state, { payload }) => { 
            state.note.push(payload);
            state.isSaving = false;
        },
        setActiveNote: (state, { payload }) => { 
            state.active = payload;
            state.isSaving = false;
        },
        // setNote: (state, { payload }) => { },
        // setSaveing: (state, { payload }) => { },
        // updateNote: (state, { payload }) => { },
        // deleteNoteById: (state, { payload }) => { },
    },
})
export const { addNewEmptyNote, setActiveNote, setNote, setSaveing, updateNote, deleteNoteById } = journalSlice.actions