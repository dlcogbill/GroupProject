import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import EditItem from './components/EditItem';
import ViewItem from './components/ViewItem';

function App() {
  return (
    <div className="App">
      <div>
        <h1>ClickBait</h1>
        <h2 className="main-title">Sell and buy Fishing Gear!!</h2>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/view/:id" element={<ViewItem />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
