import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.append('Accept', 'application/json');
  },
});

// const baseQueryWithAuth  = async <TArgs extends FetchArgs = FetchArgs>(
const baseQueryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if ('status' in result && result?.status === 401) {
    if (result) {
      const newToken = Cookies.get('token'); // Get the newly refreshed token
      if (newToken) {
        const retryResult = await baseQuery(args, api, extraOptions); // Retry the failed request with the new token
        return retryResult;
      } else {
        // If token refresh fails, logout the user
        Cookies.remove('token');
      }
    } else {
      Cookies.remove('token');
    }
  }

  return result;
};

export const api = createApi({
  // reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  tagTypes: ['user', 'post'],
  endpoints: () => ({}),
});
