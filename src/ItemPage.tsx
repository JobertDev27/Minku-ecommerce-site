import { Product, Review } from "./components/types";
import { useEffect } from "react";

type Props = {
  item: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
};

type CommentBox = {
  review: Review;
};

function CommentBox({ review }: CommentBox) {
  return (
    <div className="comment-box">
      <div className="user-info">
        <b className="commenter-name">{review.reviewerName}</b>
        <p className="commenter-email">{review.reviewerEmail}</p>
      </div>
      <p>{"★".repeat(review.rating)}</p>
      <p>{review.comment}</p>
    </div>
  );
}

export default function ItemPage({ item, setProduct }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="item-page">
      <div className="item-main-detail">
        <div className="item-image-cont">
          <img
            className="item-page-image"
            src={item.images[0]}
            alt=""
            width="360px"
            height="360px"
          />
        </div>
        <div>
          <p className="item-page-title">{item.title}</p>
          <p className="item-page-rating">{item.rating + " Rating"}</p>
          <p className="item-page-price">{"$" + item.price}</p>
        </div>
        <p className="item-page-desc">{item.description}</p>
        <button className="button item-page-button">Add to cart</button>
      </div>
      <div className="item-sec-detail">
        <button className="exit-item-button" onClick={() => setProduct(null)}>
          &gt;
        </button>
        <div className="tag-cont">
          <p>Tags: </p>
          {item.tags.map((tag) => {
            return <p>{tag}</p>;
          })}
        </div>
        <b>Dimension:</b>
        <p>{"Weight: " + item.weight}</p>
        <p>{"Width: " + item.dimensions.width}</p>
        <p>{"Height: " + item.dimensions.height}</p>
        <p>{"Depth: " + item.dimensions.depth}</p>
        <div className="comment-section">
          <b>Comments:</b>
          {item.reviews.map((review, index) => {
            return <CommentBox review={review} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
