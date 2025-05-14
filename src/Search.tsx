import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ShopItemBox from "./components/ShopItemBox";
import { Product } from "./components/types";
import ItemPage from "./ItemPage";
import Header from "./components/Header";

export default function Search() {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("q") || "";
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const [renderProduct, setRenderProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setResult(data.products);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <>
      {renderProduct ? (
        <ItemPage item={renderProduct} setProduct={setRenderProduct} />
      ) : null}
      <Header />
      <main className="search-main">
        <div className="items-cont">
          {result.length === 0 ? (
            <h2 className="item-label">
              Oops, sorry it seems like there's no product by that name!
            </h2>
          ) : loading ? (
            <h2 className="item-label">Loading...</h2>
          ) : (
            result.map((product: Product) => (
              <ShopItemBox
                product={product}
                setProduct={setRenderProduct}
                key={product.title}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}
