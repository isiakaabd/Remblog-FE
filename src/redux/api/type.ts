export interface postResponse {
  success: boolean;
  message: string;
  post: {
    _id: string;
    title: string;
    message: string;
    image: string;
    author: {
      username: string;
    };
    category: string;
    createdAt: string;
    updatedAt: string;
  };
}
interface Post {
  _id: string;
  title: string;
  message: string;
  image: string;
  author: { _id: string; username: string };
  likes: Array<string>;
  createdAt: string;
  updatedAt: string;
  category: string;
  liked: boolean;
}
export interface postResponses {
  success: true;
  data: {
    posts: Array<Post> | [];
    limit: number;
    page: number;
    total_page: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
export interface LoginResponse {
  success: string;
  user: {
    username: string;
  };
}
export interface ErrorType {
  message: string;
}
export interface LogoutType extends ErrorType {
  success: boolean;
}
