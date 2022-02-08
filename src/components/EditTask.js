import React, { useState } from 'react';
import {Button, Modal,InputGroup,FormControl} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/Action';
const EditTask = ({task}) => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [newTask,setNewTask]=useState(task.text)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const handleEdit = () => {
            dispatch(editTask(task.id,newTask))
    handleClose()
    }      
    return (
        <div>
    <>
        <Button variant="primary" onClick={handleShow}>
            Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Text</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
                onChange={(e)=>setNewTask(e.target.value)}/>
    </InputGroup>   
                </Modal.Body>P
            <Modal.Footer>
                            
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
        </div>   
    );
};

export default EditTask;
