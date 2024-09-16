import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routers/Router';
import { ThemeProvider } from './Context/ThemeContext';
import { ApiProvider } from './Services/apiHotels';

const App: FC = () => {
  return (
    <ApiProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ThemeProvider>
    </ApiProvider>
  )
}

export default App;
