import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#262254",
        },
        secondary: {
            main: "#c0392b",
        },
        error: {
            main: red.A400,
        }
    }
});
