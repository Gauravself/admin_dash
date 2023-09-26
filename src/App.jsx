import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard/Dashboard";
import CircularProgress from "@mui/material/CircularProgress";
import { tokens } from "./theme";
import { Box } from "@mui/material";

const Team = React.lazy(() => import("./scenes/team/Team"));
const Contacts = React.lazy(() => import("./scenes/contacts/Contacts"));
const Invoices = React.lazy(() => import("./scenes/invoices/Invoices"));
// import Invoices from "./scenes/dashboard/invoices";
// import Contacts from "./scenes/dashboard/contacts";
// import Bar from "./scenes/dashboard/bar";
// import Form from "./scenes/dashboard/form";
// import Line from "./scenes/dashboard/line";
// import Pie from "./scenes/dashboard/pie";
// import FAQ from "./scenes/dashboard/faq";
// import Geography from "./scenes/dashboard/geography";
// import Calendar from "./scenes/dashboard/calender";

// const routes = createBrowserRouter([
//   // { path: "/", element: <Dashboard /> },
//   // { path: "/team", element: <Team /> },
//   // { path: "/contacts", element: <Contacts /> },
//   // { path: "/invoices", element: <Invoices /> },
//   // { path: "/bar", element: <Bar /> },
//   // { path: "/form", element: <Form /> },
//   // { path: "/line", element: <Line /> },
//   // { path: "/pie", element: <Pie /> },
//   // { path: "/faq", element: <FAQ /> },
//   // { path: "/geography", element: <Geography /> },
//   // { path: "/calender", element: <Calendar /> },
// ]);

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/team"
                element={
                  <React.Suspense
                    fallback={
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <CircularProgress
                          variant="indeterminate"
                          sx={{ color: colors.greenAccent[300] }}
                        />
                      </Box>
                    }
                  >
                    <Team />
                  </React.Suspense>
                }
              />
              {/* Contacts */}
              <Route
                path="/contacts"
                element={
                  <React.Suspense
                    fallback={
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <CircularProgress
                          variant="indeterminate"
                          sx={{ color: colors.greenAccent[300] }}
                        />
                      </Box>
                    }
                  >
                    <Contacts />
                  </React.Suspense>
                }
              />
              <Route
                path="/invoices"
                element={
                  <React.Suspense
                    fallback={
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <CircularProgress
                          variant="indeterminate"
                          sx={{ color: colors.greenAccent[300] }}
                        />
                      </Box>
                    }
                  >
                    <Invoices />
                  </React.Suspense>
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
