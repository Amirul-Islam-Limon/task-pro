import baseApi from "../api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        addUser:builder.mutation({
            query:(userInfo)=>({
                url:"/user",
                method:"POST",
                body:userInfo
            })
        }),
        getUser:builder.query({
            query:()=>({
                url:"/user",
            })
        })
    }) 
})

export const {useAddUserMutation, useGetUserQuery} = userApi;