import { logoutFirebase, registerUserWithEmailAndPassword, signUserInWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal";
import { chekingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
}
export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));

    }
}
export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ email, password, displayName });
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));

    }
}
export const startSignInWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());

        const { ok, uid, displayName, photoURL, errorMessage } = await signUserInWithEmailAndPassword({ email, password });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout({}));
    }
}