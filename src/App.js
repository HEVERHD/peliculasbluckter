import "./App.css";
import Pelicula from "./components/peliculas";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import { useState, useEffect } from "react";
import Paginacion from "./components/Paginacion";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  let peliculasAll = setPeliculas;

  peliculasAll = peliculas.slice((paginaActual - 1) * 5, paginaActual * 10);
  console.log(peliculasAll);

  useEffect(() => {
    const enPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=eb42fd1735381027e43257fb869cd9ad&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    axios
      .get(enPoint)
      .then((res) => {
        const apiData = res.data;
        setPeliculas(apiData.results);
        console.log(apiData.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Wrapper>
        {peliculas.map((peliculas, index) => (
          <>
            <Pelicula
              key={index}
              img={peliculas.poster_path}
              titulo={peliculas.title}
              calificacion={peliculas.vote_average}
              popularidad={peliculas.popularity}
              lanzamiento={peliculas.release_date}
              descripcion={peliculas.overview}
              duracion={peliculas.duracion}
            ></Pelicula>
          </>
        ))}

        <Paginacion
          pagina={paginaActual}
          total={4}
          cambiarPagina={(pagina) => {
            setPaginaActual(pagina);
          }}
        />
      </Wrapper>
    </>
  );
}

export default App;
