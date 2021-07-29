import React, { useEffect, useState } from "react";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=636c2a5775bc858d533ffec5b0eb61d9"
      );
      const json = await res.json();
      console.log(json);
      setMovies(json);
    };
    getData();
  }, []);
  return (
    <StyledHeader>
      <div className="header"></div>
    </StyledHeader>
  );
};

export default Header;
