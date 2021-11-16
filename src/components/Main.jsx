import React, { useState, useEffect } from "react";
import Axios from "axios";
import Modal from "./Modal";
import Grid from "@mui/material/Grid";
import posterUrl from "../resources/images";
import AddMovieModal from "./AddMovieModal";

const styleGrid = {
  padding: "50px 700px 50px 50px"
};

const Main = () => {
  const [movies, setMovies] = useState([]);

  const AddNewMovie = (newMoviedata) => {
    setMovies([...movies, newMoviedata]);
  };

  useEffect(() => {
    Axios.get("https://swapi.dev/api/films/").then((resp) => {
      setMovies(resp.data.results);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Grid sx={styleGrid}>
        {movies.map((el, index) => (
          <Grid key={el.episode_id}>
            <div className="card mb-3" sx={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={index < 6 ? posterUrl[index] : el.newPosterUrl}
                    className="img-fluid rounded-start"
                    alt="Poster of the movie"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <p className="card-text">{el.director}</p>
                    <p className="card-text">
                      <small className="text-muted">{el.release_date}</small>
                    </p>
                    <div>
                      <Modal
                        opening_crawl={el.opening_crawl}
                        title={el.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <div>
        <AddMovieModal AddNewMovieFn={AddNewMovie} />
      </div>
    </div>
  );
};

export default Main;
