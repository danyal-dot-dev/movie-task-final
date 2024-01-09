import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../src/routes/Index";
import { AppShell, MantineProvider } from "@mantine/core";
import CustomHeader from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import getTheme from "./helpers/getTheme";
import { Notifications } from "@mantine/notifications";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import ReactErrorBoundary from "./components/ErrorBoundary/Index";

function App() {
  return (
    <>
      <ReactErrorBoundary>
        <BrowserRouter>
          <MantineProvider theme={getTheme()}>
            <Notifications position="top-right" zIndex={1000} />
            <AppShell header={<CustomHeader />} padding={0}>
              <AppRoutes />
            </AppShell>
          </MantineProvider>
        </BrowserRouter>
      </ReactErrorBoundary>
    </>
  );
}

export default App;
