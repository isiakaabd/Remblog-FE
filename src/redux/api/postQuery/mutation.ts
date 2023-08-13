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

export const { useCreatePostMutation, useDeletePostMutation, useLikePostMutation } = PostSlice;
