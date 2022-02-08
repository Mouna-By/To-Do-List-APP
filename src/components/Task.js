import React from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../redux/actions/Action';
import EditTask from './EditTask';
const Task = ({todo}) => {
    const dispatch=useDispatch()
    return (
    <div>
    <Container>
    <Row>
        <Col>{todo.text}</Col>
        <Col>   <Button variant="danger" onClick={()=>dispatch(deleteTask(todo.id))}>DELETE</Button>
                <EditTask task={todo}/>
                <Button variant="success" onClick={()=>dispatch(doneTask(todo.id))}>{todo.done==true?"undone":"done"}</Button>
        </Col>
    </Row>
    </Container>
    </div>)
};

export default Task;
