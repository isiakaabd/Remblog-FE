import { api } from '../api';
import { PostComment } from './type';
export const CommentSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (body) => ({
        url: `/comment`,
        body,
        method: 'post',
      }),
      invalidatesTags: ['comment'],

      transformErrorResponse: (error): any => error,
      transformResponse: (response: PostComment) => response.message,
    }),
    // updatePost: builder.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/post/${id}/update`,
    //     body,
    //     method: 'PATCH',
    //   }),
    //   invalidatesTags: ['post'],
    //   //@ts-ignore
    //   transformErrorResponse: (error): any => error.data.message,
    //   transformResponse: (response: postResponse): any => response.message,
    // }),
    // deletePost: builder.mutation({
    //   query: (id) => ({
    //     url: `/post/${id}`,
    //     method: 'delete',
    //   }),
    //   invalidatesTags: ['post'],
    //   //@ts-ignore
    //   // transformErrorResponse: (error): any => error.data.message,
    //   transformResponse: (response: postResponse): any => response,
    // }),
    // likePost: builder.mutation({
    //   query: (id) => ({
    //     url: `/post/${id}`,
    //     method: 'post',
    //   }),
    //   invalidatesTags: ['post'],
    //   //@ts-ignore
    //   // transformErrorResponse: (error): any => error.data.message,
    //   transformResponse: (response: postResponse): any => response,
    // }),
  }),
});

export const { useCreateCommentMutation } = CommentSlice;
