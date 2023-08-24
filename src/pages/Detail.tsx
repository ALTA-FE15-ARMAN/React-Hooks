import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Movie {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
}

const Detail: FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ4NTE0ZmViMzI4YzZiNzhhZWY1YzEyNjE3NDIwOSIsInN1YiI6IjYxYTgzYzhhODc1ZDFhMDA4YjU4OWJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19IVAC2nzdtIHIPkcEN5sK0QBGIRwKyUmtUF_2QJiO0`,
          },
        }
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (

    <section>
            <div className=" grid grid-col justify-center ml-11" >
      {movie && (
        <div className="bg-gray-500 rounded-lg shadow-md p-4 " >
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
            alt={movie.original_title}
            className="mx-auto mb-2 w-30 h-50"
          />
          <h2 className="text-center font-semibold mb-2">{movie.original_title}</h2>
          <p className="text-center w-full ">{movie.overview}</p>
          <p className="text-center font-semibold  mb-2">Rate : {movie.vote_average}</p>
        </div>
      )}
    </div>
    </section>

// w-full h-full rounded-md shadow-md grid grid-cols-1 gap-y-5

  );
};

export default Detail;
