import './App.css';
import React, { useEffect, useState } from 'react';
import CatalogData from './data/CatalogData.json';
import { CatalogListDisplay } from './components/CatalogListDisplay';
import { CatalogInformation } from './components/CatalogInformation';

function App() {
  
  return (
    <>
    <CatalogInformation />
    <div className="app" style={{margin: '50px'}}>
      
      <CatalogListDisplay productList={CatalogData.products} />
    </div></>
  );
}

export default App;
