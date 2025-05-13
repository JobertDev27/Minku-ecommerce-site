import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShopItemBox from "./components/ShopItemBox";
import ItemPage from "./ItemPage";
import { Product } from "./components/types";

export default function Store() {
  const [productByCat, setProductByCat] = useState<Record<string, Product[]>>(
    {}
  );
  const [renderProduct, setRenderProduct] = useState<Product | null>(null);

  useEffect(() => {
    const categories = async () => {
      const fetchData = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const res: string[] = await fetchData.json();

      const getProducts = await Promise.all(
        res.map(async (category: string) => {
          const fetchCat = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          const data = await fetchCat.json();
          return [category, data.products] as [string, Product[]];
        })
      );
      setProductByCat(Object.fromEntries(getProducts));
    };
    categories();
  }, []);

  return (
    <>
      {renderProduct ? (
        <ItemPage item={renderProduct} setProduct={setRenderProduct} />
      ) : null}
      <Header />
      <main className="store-main">
        {Object.keys(productByCat).length > 0 ? (
          Object.entries(productByCat).map(([category, products]) => {
            return (
              <section className="store-category-list" key={category}>
                <h2>{category}</h2>
                <div className="product-list">
                  {products.map((product) => {
                    return (
                      <ShopItemBox
                        product={product}
                        setProduct={setRenderProduct}
                        key={product.title}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })
        ) : (
          <h2>LOADING....</h2>
        )}
      </main>
    </>
  );
}
