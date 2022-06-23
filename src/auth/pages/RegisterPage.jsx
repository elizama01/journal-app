import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

const formData = {
  email: '',
  password: '',
  displayName: '',
}
const formValidations = {
  email: [(value) => value.includes("@"), 'El email debe contener @'],
  password: [(value) => value.length >= 6, "La contraseña debe tener al menos 6 caracteres"],
  displayName: [(value) => value.length >= 1, "El nombre debe tener al menos 1 caracterer"],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)
  const {
    formState, displayName, email,
    password, onInputChange, isFormValid,
    displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useSelector(state => state.auth.isCheckingAuthentication);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) true;
    dispatch(startCreatingUserWithEmailAndPassword(formState));

    e.preventDefault();
  }

  return (
    <AuthLayout title={"login"} >
      <h1>isFormValid: {isFormValid ? 'Valido ' : 'Incorrecto'}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="nombre completo"
              type="text"
              placeholder="nombre completo"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              helperText={displayNameValid}
              error={!displayName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Ingrese Email"
              name="email"
              value={email}
              onChange={onInputChange}
              helperText={emailValid}
              error={!email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Ingrese contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              helperText={passwordValid}
              error={!password}
              fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>

              <Alert severity="error">
                {errorMessage}
              </Alert>

            </Grid>
            <Grid item xs={12} sm={12} >
              <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuthentication}>
                <Typography > Crear Cuenta</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction={"row"}
            justifyContent={"end"}
          >
            <Typography sx={{ mr: 1 }}>
              ¿Ya tienes una cuenta?
            </Typography>
            <Link
              component={RouterLink}
              color='inherit'
              to="/auth/login"
            >
              Ingresar

            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout >


  )
}
