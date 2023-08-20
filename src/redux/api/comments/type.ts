export interface Comment {
  _id: string;
  message: string;
  sender: {
    _id: string;
    username: string;
  };
  postId: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface CommentResponse {
  comments: Array<Comment> | [];
  success: boolean;
  limit: number;
  page: number;
  total_page: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface PostComment {
comment:Comment,
message:string
}
