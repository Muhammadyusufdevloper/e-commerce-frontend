import { api } from './index'

export const loginRegisterApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: "/admins/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product", "Category", "Profile"]
    }),
    register: build.mutation({
      query: (body) => ({
        url: "/admins/sign-up",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product", "Category", "Profile"]
    }),
  }),
})

export const {
  useRegisterMutation,
  useSignInMutation
} = loginRegisterApi