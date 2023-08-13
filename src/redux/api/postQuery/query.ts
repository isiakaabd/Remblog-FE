// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { api } from '../api';
import { postResponse, postResponses } from '../type';

export const PostSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['post'],
      // @ts-ignore
      transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response: postResponses) => response.data,
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
