import { createContext, useReducer } from "react";

export const TasksContext = createContext()

//Reducer Function start
const taskReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const id = Math.random() * 100
            let task = {...action.payload,id}
            return {...state,tasksList:[...state.tasksList,task]}
        case 'REMOVE_TASK':
            const list = state.tasksList.filter((task) => task.id !== action.payload.id)
            return{...state,tasksList:list}
        case 'UPADTE_TASK': 
            let updateList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
            return {...state,tasksList:[...updateList]}
        case 'GET_TASKS':
            return state.tasksList
        case 'SET_SELETED_TASK':
            return {...state,selectedTask:{...action.payload}}
        case 'GET_SELETED_TASK':
            return state.selectedTask
        default:
            return state

     }
}
//Reducer Function end

export const TasksContextProvider = ({children}) => {
   
    const [state,dispatch] = useReducer(taskReducer, {
        tasksList:[],
        selectedTask:{}
    })

    return (
        <TasksContext.Provider value={{state,dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}