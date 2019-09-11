import React, { Component } from "react";

const SubjectList = () => {
  return (
    <div class="list-group m-3">
      <button
        type="button"
        class="list-group-item list-group-item-action active"
      >
        Subject List
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Math
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        History
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Chinese
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Sports
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Art
      </button>
    </div>
  );
};

export default SubjectList;
