import { ThemeProvider, createTheme } from "@mui/material/styles";

const PURPLE = "#6750A4";
const BLACK = "#3C3C3C";

const THEME = createTheme({
  palette: {
    primary: {
      main: PURPLE,
    },
    secondary: {
      main: BLACK,
    },
  },
});

const CustomThemeProvider = (props) => {
  const { children } = props;

  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
