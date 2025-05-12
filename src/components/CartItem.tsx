import { useState } from "react";
import { getCartData, saveCartData } from "./cartData";

type Product = {
  title: string;
  price: number;
  thumbnail: string;
  amount: number;
};

type Props = {
  product: Product;
};

export default function CartItem({ product }: Props) {
  const [amount, setAmount] = useState(() => {
    const cart = getCartData();
    const existingItem = cart.find((item) => item.title === product.title);
    return existingItem?.amount || 1;
  });

  const updateAmount = (newAmount: number) => {
    if (newAmount < 1) {
      removeItem();
      return;
    }

    setAmount(newAmount);
    saveCartData({
      ...product,
      amount: newAmount,
    });
  };

  const removeItem = () => {
    const currData = getCartData();
    const newData = currData.filter((item) => item.title !== product.title);
    localStorage.setItem("cartItems", JSON.stringify(newData));
    setAmount(0);
  };

  const addAmount = () => updateAmount(amount + 1);
  const subAmount = () => updateAmount(amount - 1);

  return amount < 1 ? null : (
    <div className="cart-item-container">
      <div className="cart-image-container">
        <img src={product.thumbnail} alt={`${product.title} image`} />
      </div>
      <div className="cart-content-container">
        <p className="cart-item-name">{product.title}</p>
        <p className="cart-item-price">
          {"$" + Math.round(product.price * amount * 100) / 100}
        </p>
        <div className="cart-item-amount">
          <button onClick={() => subAmount()}>-</button>
          <div className="cart-amount-counter">{amount}</div>
          <button onClick={() => addAmount()}>+</button>
        </div>
      </div>
    </div>
  );
}
