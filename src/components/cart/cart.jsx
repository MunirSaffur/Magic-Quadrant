import React, { Component } from "react";
import "./cart.css";
import CartItem from "../cartItem/cartItem";

class Cart extends Component {
  state = {
    cartItems: [
      {
        id: 1,
        productImg:
          "https://www.triproductphoto.com/wp-content/uploads/2019/11/ecommerce-product-photography-amazon-Tri-Product-Photo-06849.jpg",
        productTitle: "Coffee maker",
        count: 1,
        price: "59$",
      },
      {
        id: 2,
        productImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoN8K5rlwQ4uzpoYvTiSn8eTLnM41f8jj-6g&usqp=CAU",
        productTitle: "sony Headphone",
        count: 2,
        price: "190$",
      },
    ],
  };
  render() {
    return (
      <div className="cart-body">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th colSpan="2">Product</th>
              <th>Count</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.cartItems.map((item) => (
              <CartItem
                key={item.id}
                productImg={item.productImg}
                producttitle={item.productTitle}
                count={item.count}
                price={item.price}
                selected
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
