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
import ProfileForm from "./scenes/profileForm/ProfileForm";
import Faq from "./scenes/faq/FAQ";
// import Bar from "./components/BarChart";

const Team = React.lazy(() => import("./scenes/team/Team"));
const Contacts = React.lazy(() => import("./scenes/contacts/Contacts"));
const Invoices = React.lazy(() => import("./scenes/invoices/Invoices"));
const Calendar = React.lazy(() => import("./scenes/calendar/Calendar"));
const Bar = React.lazy(() => import("./scenes/bar"));
const Pie = React.lazy(() => import("./scenes/pie"));
const Line = React.lazy(() => import("./scenes/line"));
const Geo = React.lazy(() => import("./scenes/geo"));

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
              <Route path="/form" element={<ProfileForm />} />
              <Route
                path="/calendar"
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
                    <Calendar />
                  </React.Suspense>
                }
              />
              <Route path="/faq" element={<Faq />} />
              <Route
                path="/bar"
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
                    <Bar />
                  </React.Suspense>
                }
              />
              <Route
                path="/pie"
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
                    <Pie />
                  </React.Suspense>
                }
              />
              <Route
                path="/line"
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
                    <Line />
                  </React.Suspense>
                }
              />
              <Route
                path="/geo"
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
                    <Geo />
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
