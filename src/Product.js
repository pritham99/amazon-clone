import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, tittle, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  // console.log("this is the basket >>>>", state);

  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        tittle: tittle,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{tittle}</p>

        <p className="product_price">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>ADD TO BASKET</button>
    </div>
  );
}

export default Product;
