import { handleAddToCart } from "./cartData";

type Product = {
  title: string;
  price: number;
  thumbnail: string;
  amount: number;
};

type Props = {
  product: Product;
};

export default function ShopItemBox({ product }: Props) {
  return (
    <div className="item-container">
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
          onClick={() => handleAddToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  );
}
