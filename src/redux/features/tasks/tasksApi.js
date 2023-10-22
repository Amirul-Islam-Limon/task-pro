import baseApi from "../api/baseApi";


const taskApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        addTask:builder.mutation({
            query:(task)=>({
                url:"/task",
                method:"POST",
                body:task
            }),
            invalidatesTags:["Tasks"]
        }), 
        getTask:builder.query({
          query:()=>({
            url:"/task"
          }),
          providesTags:["Tasks"]  
        }),
        deleteTask:builder.mutation({
          query:(taskId)=>({
            url:`/deleteTask/${taskId}`,
            method:"DELETE"
          }),
          invalidatesTags:["Tasks"]
        }),
        changeTaskStatus:builder.mutation({
          query:(taskId)=>({
            url:`/changeTaskStatus/${taskId}`,
            method:"PATCH"
          }),
          invalidatesTags:["Tasks"]
        }),

    }),
})

export const {useAddTaskMutation, useGetTaskQuery, useDeleteTaskMutation, useChangeTaskStatusMutation} = taskApi;