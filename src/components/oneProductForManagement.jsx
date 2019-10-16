import React, { Component } from "react";
import { Link } from "react-router-dom";

class OneProductForManagement extends Component {
  state = {};

  handleChange = e => {
    if (e.currentTarget.checked) {
      this.props.onCheckTrue(this.props.product);
    } else {
      this.props.onCheckFalse(this.props.product.id);
    }
  };

  render() {
    const product = this.props.product;
    return (
      <div>
        <Link
          to={{
            pathname: "/productDetailManagePage",
            state: { product } //how to attach data using Link to jump to new page
          }}
        >
          <div
            className="card oneP"
            style={{ width: 12 + "rem", height: 24 + "rem" }}
          >
            <img
              src={this.props.product.imgUrl}
              className="card-img-top"
              alt="..."
              style={{ width: 100 + "%", height: 172 }}
            />

            <div
              className="card-body"
              style={{
                width: 100 + "%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                webkitLineClamp: "5",
                webkitBoxOrient: "vertical"
              }}
            >
              <h5>{this.props.product.name}</h5>

              {/*<p className="card-text">{product.desciption}</p>*/}
            </div>

            <h5 className="card-body">AU$: {this.props.product.price}</h5>
          </div>
        </Link>
        <div class="custom-control custom-checkbox">
          <input
            onChange={this.handleChange}
            type="checkbox"
            class="custom-control-input"
            id={"customCheck1" + this.props.product.id}
          />
          <label
            class="custom-control-label"
            for={"customCheck1" + this.props.product.id}
          >
            select
          </label>
        </div>
      </div>
    );
  }
}

export default OneProductForManagement;
