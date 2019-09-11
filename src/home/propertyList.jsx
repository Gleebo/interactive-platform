import React, { Component } from "react";

const PropertyList = () => {
  return (
    <div class="list-group m-3">
      <button
        type="button"
        class="list-group-item list-group-item-action active"
      >
        Property List
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Book
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Maze
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Puzzle
      </button>
    </div>
  );
};

export default PropertyList;
