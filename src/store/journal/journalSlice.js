import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
}
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {

        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload);
            state.isSaving = false;
        },
        setActiveNote: (state, { payload }) => {
            state.active = payload;
            state.isSaving = false;
            state.messageSaved = '';
        },
        creatingNewNote: (state,) => {
            state.isSaving = true;
        },
        setNotes: (state, { payload }) => {
            state.notes = payload;
        },
        setSaveing: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, { payload }) => {
            state.isSaving = false;
            console.log(payload);
            state.notes = state.notes.map(note => {
                if (note.id === payload.id) {
                    return payload;
                }
                return note;
            });
            state.messageSaved = `${payload.title} title ha sido actualizado`;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, { payload }) => { 
            state.notes = state.notes.filter(note => note.id !== payload);
            state.isSaving = false;
            state.messageSaved = '';
        },
        setPhotosToActiveNote: (state, { payload }) => {
            state.active.imageUrl = [...state.active.imageUrl, ...payload];
            state.isSaving = false;
        }
    },
})
export const { addNewEmptyNote, setActiveNote, setNotes, setSaveing, updateNote, deleteNoteById, creatingNewNote, setPhotosToActiveNote,clearNotesLogout } = journalSlice.actions