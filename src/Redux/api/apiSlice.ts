import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65225aeaf43b1793841469d2.mockapi.io",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "/users",
    }),
    fetchSingleUser: builder.query({
      query: (id) => ({
        url: `/users/:${id}`,
        method: "GET",
      }),
    }),
    setUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/:${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/:${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSetUserMutation,
  useFetchSingleUserQuery,
  useDeleteUserMutation,
  useFetchUserQuery,
  useUpdateUserMutation,
} = apiSlice;
