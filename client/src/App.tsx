import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page, routes } from "./router/routes";
import { ThemeProvider } from "./context/ThemeProvider";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map((route: Page) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
