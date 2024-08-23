import { api } from './index'

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: (params) => ({
        url: '/profile',
        params
      }),
      providesTags: ["Profile"]
    }),
    updateProfile: build.mutation({
      query: ({ id, body }) => ({
        url: `/profile/${id}`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["Profile"]
    })
  }),
})

export const {
  useGetProfileQuery,
  useUpdateProfileMutation
} = profileApi