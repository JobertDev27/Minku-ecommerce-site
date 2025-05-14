import { Link, useNavigate } from "react-router";
import searchBtnImg from "../images/search.webp";
import cartBtnImg from "../images/shopping-cart.webp";
import React, { useEffect, useState } from "react";
import { cartAmount } from "./cartData";
import shopBtn from "../images/shopping-bag.webp";

export default function Header() {
  const [amount, setAmount] = useState<number>(cartAmount());
  const [seachInp, setSearchInp] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const updatedAmount = () => setAmount(cartAmount());

    window.addEventListener("cart-updated", updatedAmount);
    return () => window.removeEventListener("cart-updated", updatedAmount);
  }, []);

  const toggle = () => {
    setToggleSearch((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = seachInp.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setSearchInp("");
    }
    setToggleSearch(false);
  };

  return (
    <>
      {toggleSearch ? (
        <div className="floating-search-bar-container" onClick={() => toggle()}>
          <form className="floating-searchbar" onSubmit={handleSearch}>
            <div className="search-cont" onClick={(e) => e.stopPropagation()}>
              <input
                type="search"
                name="searchbar"
                className="floating-search-bar"
                placeholder="Search..."
                value={seachInp}
                onChange={(e) => setSearchInp(e.target.value)}
              />
              <button className="search-btn" type="submit">
                <img src={searchBtnImg} alt="search button" />
              </button>
            </div>
          </form>
        </div>
      ) : null}
      <header>
        <div className="header-container">
          <div className="header-title" onClick={() => navigate("/")}>
            <h1>Minku</h1>
          </div>
          <form className="header-searchbar" onSubmit={handleSearch}>
            <input
              type="search"
              name="searchbar"
              className="search-bar"
              placeholder="Search..."
              value={seachInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <button className="search-btn" type="submit">
              <img src={searchBtnImg} alt="search button" />
            </button>
          </form>
          <nav>
            <ul className="header-nav">
              <li className="search-btn-small" onClick={() => toggle()}>
                <img src={searchBtnImg} alt="" />
              </li>
              <li className="store-btn-small">
                <Link to={"/Store"}>
                  <img className="store-btn" src={shopBtn} alt="" />
                </Link>
              </li>
              <li className="cart-container">
                <Link to={"/Cart"}>
                  <span className="cart-amount">{amount}</span>
                  <img className="cart-button" src={cartBtnImg} alt="" />
                </Link>
              </li>
              <li className="store-btn-big">
                <Link to={"/Store"}>
                  <button className="button">SHOP</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
