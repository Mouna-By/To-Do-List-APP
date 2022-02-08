import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Button,ButtonGroup} from 'react-bootstrap'
import Task from './Task';

const ListTask = () => {
    const tasks=useSelector(state=>state.todoReducer.tasks) //todoReducer(pure function)
    const [status, setStatus] = useState("all");

    return (
    <>
    <ButtonGroup className="mb-2">
    <Button onClick={()=>setStatus("all")}>ALL</Button>
    <Button onClick={()=>setStatus("done")}>DONE</Button>
    <Button onClick={()=>setStatus("undone")}>UNDONE</Button>
    </ButtonGroup>
    <div>
        {tasks.filter(el=>status=="done"? el.done==true : status=="undone"? el.done==false:el) 
        .map(el => <Task key={el.id} todo={el}/>)}

    </div>


    </>
    );
};

export default ListTask;
