import React, { Component } from "react";
import { async } from "q";
import {
  getCategoriesAndSubjects,
  setCategories,
  setSubjects
} from "../firebase";

class CNs extends Component {
  state = {
    testCate: ["book", "game", "toy"],
    testSub: ["math", "english", "history"]
  };

  async componentDidMount() {
    //const oo = await setCategories();
    // const ss = await setSubjects([12, 313, 12]);
    console.log("ss");
  }

  handleClick = async () => {
    const test = await getCategoriesAndSubjects();

    console.log(test);
  };

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={() => this.handleClick()}>
          click
        </button>
      </div>
    );
  }
}

export default CNs;
