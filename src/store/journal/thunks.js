import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote, creatingNewNote, deleteNoteById, setActiveNote, setNotes, setPhotosToActiveNote, setSaveing, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(creatingNewNote());

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const { uid } = getState().auth;
        const newDoc = doc(collection(FirebaseDB, `/${uid}/journal/notes`))
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote({ newNote }));
        dispatch(setActiveNote({ newNote }));

    }
}
export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del  usuario no existe');
        const { notes } = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaveing());
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        if (!note.url) {
            delete noteToFirestore.url;
        }
        const firestoreDoc = doc(FirebaseDB, `${uid}`, 'journal', 'notes', `${note.id}`)
        await setDoc(firestoreDoc, noteToFirestore);
        dispatch(updateNote(note));
    }
}

export const startUpLoadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaveing());

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosUrls));

    }
}
export const startDeleteNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active } = getState().journal;

        const firestoreDoc = doc(FirebaseDB, `${uid}`, 'journal', 'notes', `${active.id}`)
        const resp = await deleteDoc(firestoreDoc);
        dispatch(deleteNoteById(active.id));
    }
}