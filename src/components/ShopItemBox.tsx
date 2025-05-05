type Product = {
  title: string;
  price: number;
  thumbnail: string;
};

type Props = {
  product: Product;
  onclick: () => void;
};

export default function ShopItemBox({ product, onclick }: Props) {
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
        <p className="item-price">{product.price}</p>
        <button className="add-item-button button" onClick={onclick}>
          +
        </button>
      </div>
    </div>
  );
}
