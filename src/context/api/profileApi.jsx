import { api } from './index'

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: "/admins/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    register: build.mutation({
      query: (body) => ({
        url: "/admins/sign-up",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
  }),
})

export const {
  useRegisterMutation,
  useSignInMutation
} = profileApi