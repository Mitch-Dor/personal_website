import { React } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages and Routes
import MainPage from '../mainComponents/js/Main';

function RouteControl() {
  return (
      <Routes>
        <Route exact path='/' element={<MainPage />} />
      </Routes>
  );
}

export default RouteControl;
