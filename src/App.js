import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';
import ChooseSector from './components/ChooseSector';
import ConnectDatabase from './components/ConnectDatabase';
import SuspiciousUsers from './components/SuspiciousUsers';
import YourEcosystem from './components/YourEcosystem';
import Tools from './components/Tools';


function App  ()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/*" element={<MainPage />} />
        <Route path="/choose-sector" element={<ChooseSector />} />
        <Route path="/connect-database" element={<ConnectDatabase />} />
        <Route path="/suspicious-users" element={<SuspiciousUsers />} />
        <Route path="/your-ecosystem" element={<YourEcosystem />} />
      
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
