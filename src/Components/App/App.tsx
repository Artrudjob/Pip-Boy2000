import React from 'react';
import {Route, Routes} from 'react-router';
import Layout from '../Layout/Layout';
import CalculatorPage from "../../Pages/CalculatorPage/CalculatorPage";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<Layout />}>
              <Route index element={<CalculatorPage />} />
          </Route>
      </Routes>
  );
}

export default App;
