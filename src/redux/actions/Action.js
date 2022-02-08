import { ADD, DELETE, EDIT , DONE} from "./ActionType"

export const addTask = newTask =>{ //payload=(id:Math.random, tex="balabala", done"false")
    return {type: ADD,
            payload:newTask}
}

export const deleteTask = id =>{ // id: number
    return{type: DELETE,
            payload:id
    }
}

export const editTask = (id,newTask)=>{ //payload="text"
    return{type: EDIT,
        payload:{newTask,id}
    }    
}
export const doneTask = (id)=>{
    return{type:DONE,
        payload:id

    }
}