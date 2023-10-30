import baseApi from "../api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        addUser:builder.mutation({
            query:(userInfo)=>({
                url:"/user",
                method:"POST",
                body:userInfo
            }),
            invalidatesTags:["Users"]

        }),
        getUser:builder.query({
            query:()=>({
                url:"/user",
            }),
            providesTags:["Users"]
        })
    }) 
})

export const {useAddUserMutation, useGetUserQuery} = userApi;