interface User {
  username: string;
  image: string;
  isVerified: boolean;
}

interface IComment {
  user: User;
  rating: number;
  text: string;
}

interface Detail {
  normal: string;
  important: string;
  direction: "n-i" | "i-n";
}

interface Product {
  isBundle: boolean;
  oneTime: boolean;
  bigImage: string;
  smallImage: string;
  titleName: string;
  name: string;
  quantity: number;
  avgRating: number;
  leftInStock: number;
  price: number;
  description: string;
  details: Detail[];
  discount: number;
  comments: IComment[];
}
