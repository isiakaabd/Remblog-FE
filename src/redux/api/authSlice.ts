import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { api } from './api';
import { ErrorType, LoginResponse, LogoutType } from './type';

export const authSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      //@ts-ignore
      transformErrorResponse: (error): ErrorType => error.data.message,
      transformResponse: (response: LoginResponse): any => response.user,
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
      //@ts-ignore
      transformErrorResponse: (error: ErrorType | FetchBaseQueryError) => error.data.message,
      //@ts-ignore
      transformResponse: (response): any => response,
    }),

    logout: builder.mutation({
      query: (body) => ({
        url: '/logout',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
      transformErrorResponse: (error: FetchBaseQueryError) => error.data,
      transformResponse: (data: LogoutType) => data.message,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authSlice;
