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
        })
        
    })
})

export const {useAddTaskMutation, useGetTaskQuery} = taskApi;