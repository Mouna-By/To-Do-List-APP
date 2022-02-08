import React, {useState} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/Action';

function AddTask() {
    const dispatch= useDispatch()
    const [input, setInput] = useState("");
    return(

    <div>
    <InputGroup className="mb-3">
        <FormControl 
        onChange={(e)=> setInput (e.target.value)}
        placeholder="ADD NEW TASK"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        />
        <Button onClick={()=>dispatch(addTask({id:Math.random(),text:input, done:false}))} variant="outline-secondary" id="button-addon2">
        ADD
        </Button>
    </InputGroup>
    </div>
    );
}

export default AddTask;
