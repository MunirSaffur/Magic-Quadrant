import React, { Component } from "react";

class CartItem extends Component {
  state = {
    productImg: this.props.productImg,
    productTitle: this.props.productTitle,
    count: this.props.count,
    price: this.props.price,
  };
  render() {
    return (
      <tr>
        <td>
          <img src={this.state.productImg} width="60" />
        </td>
        <td>{this.state.productTitle}</td>
        <td>{this.state.count}</td>
        <td>{this.state.price}</td>
        <th>
          <button className="btn btn-danger">Remove</button>
        </th>
      </tr>
    );
  }
}

export default CartItem;
