import React, { Component } from "react";

let SingleFilm = (props) => {
  return (
    <React.Fragment>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.film.title}</h5>
          <p class="card-text">{props.film.description}</p>
          <a href={props.film.url} class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleFilm;
