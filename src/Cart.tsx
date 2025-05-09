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
  return (
    <main className="cart-page">
      <Link to="/" className="home-link">
        &#60; Return to home
      </Link>
      <div className="cart-item-grid">
        {cartItems.map((item, index) => {
          return <CartItem product={item} key={index} />;
        })}
      </div>
    </main>
  );
}
