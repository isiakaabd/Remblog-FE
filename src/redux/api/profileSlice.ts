import { api } from './api';

export const ProfileSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/profile',
      }),
      //@ts-ignore
      transformErrorResponse: (error): any => error.data.message,
      transformResponse: (response): any => response,
    }),
  }),
});

export const { useGetProfileQuery } = ProfileSlice;
