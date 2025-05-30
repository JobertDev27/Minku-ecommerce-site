import { useEffect, useState } from "react";
import { Product } from "./components/types";

import Header from "./components/Header";
import ShopItemBox from "./components/ShopItemBox";
import Footer from "./components/Footer";
import ItemPage from "./ItemPage";

import heroImg from "./images/bag.webp";
import sellersBg from "./images/sellersBG.svg";
import { useNavigate } from "react-router";

export default function Home() {
  const [items, setItems] = useState([]);
  const [renderProduct, setRenderProduct] = useState<Product | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const url: string = "https://dummyjson.com/products?limit=3";
        const res = await fetch(url);
        const data = await res.json();
        setItems(data?.products);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      {renderProduct ? (
        <ItemPage item={renderProduct} setProduct={setRenderProduct} />
      ) : null}
      <main>
        <section className="hero">
          <img
            className="hero-image"
            src={heroImg}
            alt="blue bag"
            loading="lazy"
          />
          <div className="hero-offer">
            <p className="hero-discount">GET 50% OFF!</p>
            <p className="hero-info">
              Get our current deals at half the price!
            </p>
            <div className="hero-btn-container">
              <button className="button" onClick={() => navigate("/Store")}>
                Shop Now
              </button>
              <button className="sec-button">Learn More</button>
            </div>
          </div>
        </section>
        <img className="sellers-bg" src={sellersBg} alt="" />
        <section className="best-seller">
          <h2>BEST SELLERS</h2>
          <div className="best-seller-container">
            {items.map((product, index: number) => {
              return (
                <ShopItemBox
                  product={product}
                  key={index}
                  setProduct={setRenderProduct}
                />
              );
            })}
          </div>
        </section>
        <section className="features">
          <div className="feature-container">
            <p className="feature-heading">FREE SHIPPING</p>
            <p className="feature-body">
              World-wide free shipping with location tracking to track parcel.
            </p>
          </div>
          <div className="feature-container">
            <p className="feature-heading">7 DAYS RETURN</p>
            <p className="feature-body">
              Paid product shipping for item return, guaranteed money back.
            </p>
          </div>
          <div className="feature-container">
            <p className="feature-heading">SAFE BILLING</p>
            <p className="feature-body">
              Easy online payment through trusted billing methods.
            </p>
          </div>
        </section>
        <section className="contact">
          <div className="contact-left">
            <h2>CONTACT US!</h2>
            <p>We will answer your concerns anytime!</p>
          </div>
          <div className="contact-right">
            <form
              action=""
              className="contact"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "This is a test website, if it was real you just submitted a message!"
                );
              }}
            >
              <div className="input-contact">
                <label htmlFor="email">Email Address:</label>
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  required
                />
              </div>

              <div className="input-contact">
                <label htmlFor="subject">Subject:</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Your subject here..."
                />
              </div>
              <div className="input-contact">
                <textarea
                  name="message"
                  className="input-message"
                  placeholder="Message..."
                  cols={44}
                  rows={10}
                  required
                ></textarea>
              </div>
              <div className="input-contact">
                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="bg-split"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
