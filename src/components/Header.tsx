import { Link } from "react-router";
import searchBtnImg from "../images/search.webp";
import cartBtnImg from "../images/shopping-cart.webp";
import { useEffect, useState } from "react";
import { cartAmount } from "./cartData";

export default function Header() {
  const [amount, setAmount] = useState<number>(cartAmount());

  useEffect(() => {
    const updatedAmount = () => setAmount(cartAmount());

    window.addEventListener("cart-updated", updatedAmount);
    return () => window.removeEventListener("cart-updated", updatedAmount);
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-title">
          <h1>Minku</h1>
        </div>
        <div className="header-searchbar">
          <input
            type="search"
            name="searchbar"
            className="search-bar"
            placeholder="Search..."
          />
          <button className="search-btn">
            <img src={searchBtnImg} alt="search button" />
          </button>
        </div>
        <nav>
          <ul className="header-nav">
            <li className="cart-container">
              <Link to={"/Cart"}>
                <span className="cart-amount">{amount}</span>
                <img className="cart-button" src={cartBtnImg} alt="" />
              </Link>
            </li>
            <li>
              <Link to={"/Store"}>
                <button className="button">SHOP</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
