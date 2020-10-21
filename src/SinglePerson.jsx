import React, { Component } from "react";

let SinglePerson = (props) => {
  return (
    <React.Fragment>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.person.name}</h5>
          <p class="card-text">{props.person.gender}, {props.person.age}</p>
          <a href={props.person.url} class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SinglePerson;