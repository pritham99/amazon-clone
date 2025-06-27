import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [, dispatch] = useStateValue();  // ✅ Get dispatch correctly

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_Image" src={image} alt={title} /> {/* ✅ alt added */}
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_Title">{title}</p> {/* ✅ Fixed typo from tittle to title */}
        <p className="checkoutProduct_Price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>  // ✅ Added key to prevent React warnings
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>REMOVE FROM CART</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
