import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getCartData } from "./components/cartData";

import CartItem from "./components/CartItem";

type CartItem = {
  title: string;
  price: number;
  thumbnail: string;
  amount: number;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartData());
  }, []);

  const setTotal = () => {
    let total: number = 0;
    cartItems.map((item) => {
      total += item.price * item.amount;
    });
    return total;
  };

  return (
    <>
      <main className="cart-page">
        <nav className="home-link-container">
          <Link to="/" className="home-link">
            &#60; Return to home
          </Link>
        </nav>
        <div className="cart-item-grid">
          {cartItems.map((item, index) => {
            return <CartItem product={item} key={index} />;
          })}
        </div>
      </main>
      <div className="checkout">
        <div>
          <b className="checkout-total">TOTAL: ${setTotal()}</b>
        </div>
        <div>
          <button className="button">CHECK OUT</button>
        </div>
      </div>
    </>
  );
}
