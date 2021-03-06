import React from "react";
import Gif from "./Gif";
import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="list-of-gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url}></Gif>
      ))}
    </div>
  );
}
