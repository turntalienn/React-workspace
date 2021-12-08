import React, { useState, createContext } from "react";

export const MovieContext = createContext();
const MovieProvider = (props) => {
  const [movies, setmovies] = useState([
    { name: "Inception", price: 300, id: 1 },
    { name: "Interstellar", price: 350, id: 2 },
    { name: "Tenet", price: 500, id: 3 },
  ]);
  return (
    <MovieContext.provider value={"hello"}>
      {props.children}
    </MovieContext.provider>
  );
};

export default MovieProvider;
