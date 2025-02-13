import React from 'react'; 
import { Outlet } from 'react-router-dom';

const DataArea = () => {
  return <div className="data-area"> <Outlet /></div>;
};

export default DataArea;