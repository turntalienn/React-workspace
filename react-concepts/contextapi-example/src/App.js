import React from 'react'
import MovieList from './MovieList';
import './App.css';
import MovieProvider from './MovieContext';


function App() {
 
  
  return (
    <MovieProvider>
      <MovieList/>
    </MovieProvider>
  );
};

export default App;
