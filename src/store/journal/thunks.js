import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {
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