import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ColorContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Main from "./components/Main";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Main />,
      index: true,
      children: [],
    },
  ]);

  const [theme, colorMode] = useMode();
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
