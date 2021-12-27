import React from "react";

type GifGridItemProps = {
  id: string;
  title: string;
  url: string;
};

export const GifGridItem = ({ id, title, url }: GifGridItemProps) => {

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card mb-2 animate__animated animate__fadeIn">
        <img className="img-fluid rounded" id={id} src={url} alt={title} />
        <div className="card-body">
          <h3 id="title" className="card-title black text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};
