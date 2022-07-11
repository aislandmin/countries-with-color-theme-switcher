import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestAllCountries } from "./api/CountryService";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-text: center;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const countries = await requestAllCountries();
      setCountries(countries);
      setLoading(false);
    };

    getCountries();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <Layout theme={theme} setTheme={setTheme} loading={loading} />
            }
          >
            <Route index element={<Home countries={countries} />} />
            <Route path="country/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
