import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
