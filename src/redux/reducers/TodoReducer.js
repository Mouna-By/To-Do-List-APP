
import { ADD, DELETE, EDIT,DONE } from "../actions/ActionType"


//initial state
const initialState={
    tasks:[{id:Math.random(),text:"learn Redux",done:false},
        {id:Math.random(),text:"learn JSX",done:false},
        {id:Math.random(),text:"learn html",done:false}]
}

// pure function
export const todoReducer =(state=initialState,{type,payload})=>{
                                                 //ACTION
        switch(type){
            case ADD:
                return{...state,tasks:[...state.tasks,payload]}
            case DELETE:
            return{...state,tasks:state.tasks.filter(el=>el.id !=payload)}   
            
            case EDIT:
                return{...state,tasks:state.tasks.map(el=>el.id==payload.id? {...el, text:payload.newTask}:el)}
                
            case DONE:
                return{...state, tasks:state.tasks.map(el=>el.id==payload? {...el,done:!el.done}:el)

                }    
                default: // obligatoire
                    return state    
        }

}