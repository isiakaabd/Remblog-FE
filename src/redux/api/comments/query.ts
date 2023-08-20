// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { api } from '../api';
import { CommentResponse } from './type';

export const CommentSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ['comment'],
      transformErrorResponse: (error) => error,
      transformResponse: (response: CommentResponse) => response,
    }),
  }),
});

export const { useGetCommentsQuery } = CommentSlice;
