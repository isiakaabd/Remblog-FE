import { api } from '../api';
import { postResponse } from '../type';

export const PostSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (body) => ({
        url: `/post`,
        body,
        method: 'post',
      }),
      invalidatesTags: ['post'],
      //@ts-ignore
      transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response: postResponse): any => response.message,
    }),
    updatePost: builder.mutation({
      query: ({ id, body }) => ({
        url: `/post/${id}/update`,
        body,
        method: 'PATCH',
      }),
      invalidatesTags: ['post'],
      //@ts-ignore
      transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response: postResponse): any => response.message,
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['post'],
      //@ts-ignore
      // transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response: postResponse): any => response,
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: 'post',
      }),
      invalidatesTags: ['post'],
      //@ts-ignore
      // transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response: postResponse): any => response,
    }),
  }),
});

export const { useUpdatePostMutation, useCreatePostMutation, useDeletePostMutation, useLikePostMutation } = PostSlice;
