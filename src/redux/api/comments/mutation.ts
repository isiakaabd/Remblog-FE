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
    updateComment: builder.mutation({
      query: (body) => ({
        url: `/comments/${body.id}`,
        body,
        method: 'PATCH',
      }),
      // eslint-disable-next-line
      //@ts-ignore
      invalidatesTags: (arg) => [{ type: 'comment', id: arg.id }],

      //@ts-ignore
      transformErrorResponse: (error): any => error,
      transformResponse: (response: PostComment) => response.message,
    }),
    deleteComment: builder.mutation({
      query: (body) => ({
        url: `/comments/${body.id}`,
        method: 'delete',
        body,
      }),
      // eslint-disable-next-line
      invalidatesTags: (arg) => [{ type: 'comment', id: arg.id }],

      // invalidatesTags: ['comment'],

      transformErrorResponse: (error): any => error,
      transformResponse: (response: any) => response.message,
    }),
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

export const { useCreateCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation } = CommentSlice;
