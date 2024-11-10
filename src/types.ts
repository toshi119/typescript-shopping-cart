export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  // rating: number[];  ratingはオブジェクトであり配列ではない
  rating: {
    rate: number;
    count: number;
  }
};
