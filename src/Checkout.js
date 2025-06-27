import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
const [{ basket }] = useStateValue(); // remove dispatch
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout_heading">
          <h3>Hello, {user ? user.email.split("@")[0] : "guest"}</h3>
          <h2>Your shopping Baskett</h2>
          <h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                tittle={item.tittle}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
