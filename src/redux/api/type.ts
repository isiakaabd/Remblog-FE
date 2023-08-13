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
    createdAt: string;
    updatedAt: string;
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
