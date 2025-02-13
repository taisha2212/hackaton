import React from 'react';
import SideMenu from './SideMenu';
import DataArea from './DataArea';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-page">
      <SideMenu />
      <div className="data-area">
        <Outlet /> {/* Esto renderizará las rutas anidadas */}
      </div>
    </div>
  );
};

export default MainPage;