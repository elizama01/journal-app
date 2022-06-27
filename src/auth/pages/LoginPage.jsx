import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startSignInWithEmailAndPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";
const formData = {
  email: "",
  password: "",
}
export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticated = useMemo(() => status === "checking", [status]);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(startSignInWithEmailAndPassword({ email, password }));

  }
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }
  return (
    <AuthLayout title={"login"} >
      <form>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} >
              <Button variant="contained"
                onClick={onSubmit}
                disabled={isAuthenticated}
                fullWidth>
                <Typography > Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button variant="contained"
                onClick={onGoogleSignIn}
                disabled={isAuthenticated}
                fullWidth>
                <Typography > Login with</Typography>
                <Google />
                <Typography sx={{ ml: 1 }}> Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction={"row"}
            justifyContent={"end"}
          >
            <Link
              component={RouterLink}
              color='inherit'
              to="/auth/register"
            >
              Crear una cuenta

            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>


  )
}
