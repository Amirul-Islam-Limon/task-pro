import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath:"api",
    // baseQuery:fetchBaseQuery({baseUrl:"https://task-pro-eight.vercel.app"}),
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    tagTypes:["Tasks"],
    endpoints:()=>({

    })
})

export default baseApi;