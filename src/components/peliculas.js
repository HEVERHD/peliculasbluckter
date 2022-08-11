export default function Pelicula(props) {
  return (
    <div className="movie-item-style-2">
      <img src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt="..." />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{props.titulo}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.calificacion}</span> /10
        </p>
        <p className="describe">descripcion : {props.descripcion}</p>
        <p>
          Popularidad: <a href="#">{props.popularidad}</a>
        </p>
        <p>
          Lanzamiento: <a href="#">{props.lanzamiento}</a>
        </p>
        <p>
          Actores:{props.actores} <a href="#"> Chris Hemsworth</a>
        </p>
      </div>
    </div>
  );
}
