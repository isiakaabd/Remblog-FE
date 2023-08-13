import { api } from '../api';
import { postResponse } from '../type';

export const PostSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
      providesTags: ['post'],
      //@ts-ignore
      transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response): any => response.data.posts,
    }),
    getPost: builder.query({
      query: (id: string | undefined) => ({
        url: `/post/${id}`,
      }),
      providesTags: ['post'],
      //@ts-ignore
      transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response: postResponse): any => response.post,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = PostSlice;
