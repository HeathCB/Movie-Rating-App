import React from "react";
import Movie from "./movie";

const MovieList = () => {
  const movieListSummary = [
    {
      name: "Fast and Furious",
      summary:
        "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
      source: "https://www.imdb.com/title/tt0232500/plotsummary",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg",
      id: 1,
    },
    {
      name: "2 Fast 2 Furious",
      summary:
        "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.",
      source: "https://www.imdb.com/title/tt0322259/?ref_=nv_sr_srsg_0",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/9/9d/Two_fast_two_furious_ver5.jpg",
      id: 2,
    },
    {
      name: "The Fast and the Furious: Tokyo Drift",
      summary:
        "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
      source: "https://www.imdb.com/title/tt0463985/?ref_=nv_sr_srsg_0",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Poster_-_Fast_and_Furious_Tokyo_Drift.jpg/220px-Poster_-_Fast_and_Furious_Tokyo_Drift.jpg",
      id: 3,
    },
    {
      name: "Fast & Furious",
      summary:
        "Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
      source: "https://www.imdb.com/title/tt1013752/?ref_=fn_al_tt_2",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg",
      id: 4,
    },
  ];

  return (
    <div className="movieList">
      {movieListSummary.map( ( item ) => {
        return (
          <div key = { item.id }>
            <Movie
              title = { item.name }
              summary = { item.summary }
              Img = { item.movieImage }
              source = { item.source }
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;