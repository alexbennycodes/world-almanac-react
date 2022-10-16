import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCountriesLayout } from "./pages/AllCountriesLayout";
import { CountryDetailsLayout } from "./pages/CountryDetailsLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AllCountriesLayout />} />
        <Route
          path="/country/:countryCode"
          element={<CountryDetailsLayout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
