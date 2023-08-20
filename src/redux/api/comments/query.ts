// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { api } from '../api';
import { Comment, CommentResponse } from './type';

export const CommentSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id) => `/comments/${id}`,
      transformErrorResponse: (error) => error,
      // @ts-expect-error
      providesTags: (result) => [
        'comment',
        ...(result?.comments || []).map(({ _id }) => ({ type: 'comment', id: _id })),
      ],
      transformResponse: (response: CommentResponse) => response,
    }),
    getComment: builder.query<Comment, string>({
      query: (id) => `/comment/${id}`,
      // @ts-expect-error
      providesTags: (arg) => [{ type: 'comment', id: arg }],

      transformErrorResponse: (error) => error,
      transformResponse: (response: Comment) => response,
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentQuery } = CommentSlice;
