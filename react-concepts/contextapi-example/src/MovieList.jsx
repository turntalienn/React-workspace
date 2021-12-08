import React, { useState, useContext } from "react";
import { Movies } from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = (props) => {
  const value = useContext(MovieContext);
  return (
    <div>
      <h3>{value}</h3>
      {/* {movies.map((movie) => (
        <Movies name={movie.name} price={movie.price} key={movie.id} />
      ))} */}
    </div>
  );
};

export default MovieList;
