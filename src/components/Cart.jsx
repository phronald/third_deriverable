import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = ({ character }) => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    axios.get(character).then((res) => setCart(res.data));
  }, []);
  return (
    <div>
      <div className="card">
        <div className="side_img">
          <img src={cart.image} alt="img" />
        </div>
        <div className="data_characters">
          <h3>{cart.name}</h3>
          <hr />
          <ul>
            <li>
              <b>species :</b> {cart?.species}
            </li>
            <li>
              <b>origin :</b> {cart?.origin?.name}
            </li>
            <li>
              {" "}
              <b>type :</b> {cart?.type === "" ? "unknown type" : cart?.type}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
