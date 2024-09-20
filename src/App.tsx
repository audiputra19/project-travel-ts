import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routers/Router';
import { ThemeProvider } from './Context/ThemeContext';
import { ApiProvider } from './Services/apiHotels';
import { DateProvider } from './Context/DateContext';

const App: FC = () => {
  return (
    <ApiProvider>
      <DateProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </ThemeProvider>
      </DateProvider>
    </ApiProvider>
  )
}

export default App;
