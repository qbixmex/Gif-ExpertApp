import React from "react";
import { GifGridItem } from './GifGridItem';
import useFetchGif from "../Hooks/useFetchGif";
import "animate.css/animate.min.css";

type GifGridProps = { category: string };

export const GifGrid = ({ category }: GifGridProps) => {

  const { data: images, loading } = useFetchGif( category );

  return (
    <>
    {
      category && loading ?
      <h3 className="text-center display-1 blue animate__animated animate__flash">Loading</h3> :
        <>
          <h2 className="display-2 mb-3 text-center animate__animated animate__fadeIn">{ category }</h2>
          <div className="row">
          {
            images && images.map( image => (
              <GifGridItem
                key={ image.id }
                { ...image }
              />
            ))
          }
          </div>
        </>
    }
    </>
  );
}
