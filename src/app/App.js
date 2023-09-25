import '../styles/App.css';
import Home from '../pages/Home';
import Form from '../pages/Form';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Routes>
      <React.Fragment>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/:id" element={<Form />} />
        </Route>
      </React.Fragment>
    </Routes>
  );
}

export default App;
