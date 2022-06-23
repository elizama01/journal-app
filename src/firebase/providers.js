import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from '@firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const user = result.user;

        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage

        }

    }
}
export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        //TODO: actualizar el nombre del usuario
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    }
    catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message };
    }

}

export const signUserInWithEmailAndPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(resp);
        const { uid, displayName, photoURL } = resp.user;
        return {
            ok: true,
            uid, displayName, photoURL
        }
    }
    catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message };
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return { ok: true };
    }
    catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message };
    }
}