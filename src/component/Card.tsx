import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface CardProps {
  id: string;
  title?: string;
  poster_path?: string;
  desc?: string;
  author?: string;
}

const Card: FC<CardProps> = ({ id, title, desc, poster_path, author }) => {

  return (
    <div
      id={id}
      className="w-full h-full rounded-md shadow-md grid grid-cols-1 gap-y-5"
    >
      <img
        src={
          poster_path
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
            : "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc"
        }
        width={200}
        height={200}
        className="w-full h-full"
        alt={title}
      />
      <h2 className="font-semibold">{title}</h2>
      <p>{desc}</p>
      <p>Author: {author}</p>
        <div className="">
        <Link to={`/detail/${id}`}>
        <Button id="detail-button" label="Detail" />
      </Link>
        </div>

    </div>
  );
};

export default Card;
