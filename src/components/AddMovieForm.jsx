import { useEffect, useState } from "react";
import Axios from "axios";

const AddMovieForm = (props) => {
  const { AddNewMovieFn } = props;
  const [episodeIdValue, setEpisodeId] = useState("");
  const [titleValue, setTitle] = useState("");
  const [producerValue, setProducer] = useState("");
  const [releaseDateValue, setReleaseDate] = useState("");
  const [directorValue, setDirector] = useState("");
  const [posterValue, setPoster] = useState("");
  const [planetValue, setPlanet] = useState("");
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.dev/api/planets/").then((resp) => {
      setPlanets(resp.data.results);
      console.log(resp.data.results[0].name);
      console.log(resp.data.results.length);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDataForm = (e) => {
    e.preventDefault();
    AddNewMovieFn({
      episode_id: episodeIdValue,
      title: titleValue,
      producer: producerValue,
      release_date: releaseDateValue,
      director: directorValue,
      newPosterUrl: posterValue,
      planets: planetValue
    });
    setEpisodeId("");
    setTitle("");
    setProducer("");
    setReleaseDate("");
    setDirector("");
    setPoster("");
    setPlanet("");
  };

  return (
    <form onSubmit={handleDataForm}>
      <div>
        <input
          type="number"
          placeholder="Episode id"
          value={episodeIdValue}
          required
          onChange={(e) => {
            setEpisodeId(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={titleValue}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Producer"
          value={producerValue}
          required
          onChange={(e) => {
            setProducer(e.target.value);
          }}
        />
      </div>
      <div>
        <label for="releaseDate" className="label">
          Release Date:
        </label>

        <input
          type="date"
          id="releaseDate"
          name="trip-start"
          value={releaseDateValue}
          /* min="1990-01-01"
          max="2021-12-31" */
          required
          onChange={(e) => {
            setReleaseDate(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Director"
          value={directorValue}
          required
          onChange={(e) => {
            setDirector(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Link image of the poster"
          value={posterValue}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Planets: </label>
        <select
          value={planetValue}
          onChange={(e) => {
            setPlanet(e.target.value);
          }}
        >
          {planets.map((el, index) => (
            <option key={el.index}>{el.name}</option>
          ))}
        </select>
      </div>
      <br />
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddMovieForm;
