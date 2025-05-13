export type Product = {
 title: string;
  price: number;
  thumbnail: string;
  amount: number;
  images : string;
  rating : number;
  description : string;
  tags : string[];
  weight : number;
  dimensions : {
    width : number;
    height : number;
    depth : number;
  }
  reviews : Review[];
}

export type Review = {
    rating: number;
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
}