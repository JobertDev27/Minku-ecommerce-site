import { handleAddToCart } from "./cartData";
import { Product } from "../components/types";

type Props = {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
};

export default function ShopItemBox({ product, setProduct }: Props) {
  return (
    <div className="item-container" onClick={() => setProduct(product)}>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={256}
        height={256}
        className="product-thumb"
      />
      <div className="item-content">
        <p className="item-name">{product.title}</p>
        <p className="item-price">{"$" + product.price}</p>
        <button
          className="add-item-button button"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
