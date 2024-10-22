import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, tittle, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id, // Pass the item's unique id
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_Image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_Tittle">{tittle}</p>
        <p className="checkoutProduct_Price">
          <small>$</small> <strong>{price} </strong>
        </p>
        <div className="checkoutProduct_Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>REMOVE FROM CART</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
