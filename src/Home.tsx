import { useEffect } from "react";
import Header from "./components/Header";

import heroImg from "./images/bag.webp";
import sellersBg from "./images/sellersBG.svg";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      try {
        const url: string = "https://dummyjson.com/products?limit=0";
        const res = await fetch(url);
        const data = await res.json();
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
      <main>
        <section className="hero">
          <img className="hero-image" src={heroImg} alt="blue bag" />
          <div className="hero-offer">
            <p className="hero-discount">GET 50% OFF!</p>
            <p className="hero-info">
              Get our current deals at half the price!
            </p>
            <div className="hero-btn-container">
              <button className="button">Shop Now</button>
              <button className="sec-button">Learn More</button>
            </div>
          </div>
        </section>
        <img className="sellers-bg" src={sellersBg} alt="" />
        <section className="best-seller">
          <h2>BEST SELLERS</h2>
        </section>
      </main>
    </>
  );
}
