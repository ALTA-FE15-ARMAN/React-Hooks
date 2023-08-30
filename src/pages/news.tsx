import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../features/modeSlice";
import Card from "../component/Card";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Navbar from "../component/navbar";

const News = () => {
  const username = Cookies.get("username");
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode.mode);
  const [news, setNews] = useState<[]>();

  const getNews = () => {
    axios
    .get(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ4NTE0ZmViMzI4YzZiNzhhZWY1YzEyNjE3NDIwOSIsInN1YiI6IjYxYTgzYzhhODc1ZDFhMDA4YjU4OWJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19IVAC2nzdtIHIPkcEN5sK0QBGIRwKyUmtUF_2QJiO0`,
          },
        }
      ) 
      .then((response) => {
        setNews(response?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
     <section
     className={`w-screen h-screen flex flex-col ${
      mode ? "bg-gray-900 text-white" : "bg-white text-black"
    }`}
     >
      <Navbar onClick={() => dispatch(toggleMode())}/>
      <div className="flex flex-col justify-center ">
        <h2>Hello, Good Night {username}</h2>
        <div className="grid grid-cols-6 gap-x-5 gap-y-5 ">
          {news &&
            news.map((item: any, index: any) => {
              return (
                <Card
                  key={index}
                  id={item?.id}
                  title={item?.original_title}
                  desc={item?.vote_average}
                  poster_path={item?.poster_path}
                  author={item?.release_date}
                />
              );
            })}
        </div>
      </div>
      </section>

  

    
   
  );
};

export default News;