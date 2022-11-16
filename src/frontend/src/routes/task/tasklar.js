import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {Button, Form, Modal} from "react-bootstrap";
import {getTaskById, saveTask} from '../../util/client'
import NavigationBar from "../../components/NavigationBar";
import {Link} from "react-router-dom";
import TaskCard from "./TaskCard";

const Tasklar = () => {
    // USE EFFECT HOOK (LIFE CYCLE METHOD)
    useEffect(
        () => {
            tasklarniServerdanOlish();
        },
        []
    )

    // STATES
    const [tasks, setTasks] = useState([]);
    const [modalOchildimi, setModalOchildimi] = useState(false);
    const [selectedTask, setSelectedTask] = useState();

    // FUNCTIONS
    const handleClose = () => {
        setModalOchildimi(false)
        setTimeout(
            () => setSelectedTask(null),
            200)
    };
    const handleShow = () => setModalOchildimi(true);
    const tasklarniServerdanOlish = () => {
        axios.get('/api/tasks')
            .then(jovob => {
                    setTasks(jovob.data.data)
                    console.log(jovob.data.data)
                }
            )
            .catch(error => {
                console.log(error)
            })
    }
    const deleteVazifaById = (id) => {
        axios.delete('/api/tasks/' + id)
            .then(response => {
                console.log(response.data)
                if (response.data.success) {
                    toast.success(response.data.message)
                }
                tasklarniServerdanOlish();
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleSaqlash = (event) => {
        event.preventDefault();
        // console.log(event.target.title.value)
        // console.log(event.target.description.value)
        const {title, description} = event.target.valueOf()
        console.log(title.value);
        console.log(description.value);
        const newTask = {
            id: selectedTask?.id,
            title: title.value,
            description: description.value
            // issuedAt: issuedAt.value,
        };

        saveTask(newTask).then(data => {
            console.log(data);
            toast.success(data.message, {theme: "colored"})
            handleClose()
            tasklarniServerdanOlish();
        });


    }
    const editTaskById = (taskId) => {
        // alert("Task editing id: " + taskId)
        // alert(`Task editing id: ${taskId}`)
        getTaskById(taskId)
            .then(task => {
                setSelectedTask(task)
                handleShow();
            });

    }

    //RETURN
    return (
        <div className={'container border border-danger'}>
            <h1>This is Task Page</h1>
            <Button variant="primary" onClick={handleShow}>
                + add new task
            </Button>
            <div className="justify-content-center">
                <div className="">
                    <h1 className={'text-center'}>TASKLARIM</h1>

                    {tasks.length > 0 ?
                        <div className={'row mx-auto'}>
                            {tasks.map((task, index) => {
                                return <TaskCard key={index} title={task.title} date={task.date}/>
                            })}
                        </div>

                        // <table className="table table-dark mb-5">
                        //     <thead>
                        //     <tr>
                        //         <th scope="col">#</th>
                        //         <th scope="col">Title</th>
                        //         <th scope="col">Date</th>
                        //         <th scope="col">Actions</th>
                        //     </tr>
                        //     </thead>
                        //     <tbody>
                        //     {tasks.map((vazifa, index) => {
                        //         return <tr key={vazifa.id}>
                        //             <th scope="row">{index + 1}</th>
                        //             <td>
                        //                 <Link
                        //                     className="text-white text-decoration-none"
                        //                     to={`/tasklar/${vazifa.id}`}>{vazifa.title}
                        //                 </Link>
                        //             </td>
                        //             <td>{vazifa.createdAt}</td>
                        //             <td>
                        //                 {/*EDIT BUTTON*/}
                        //                 <button
                        //                     onClick={() => editTaskById(vazifa.id)}
                        //                     className="btn btn-warning"
                        //                 >EDIT
                        //                 </button>
                        //                 {/*DELETE BUTTON*/}
                        //                 <button
                        //                     onClick={() => deleteVazifaById(vazifa.id)}
                        //                     className="btn btn-danger"
                        //                 >DELETE
                        //                 </button>
                        //             </td>
                        //         </tr>
                        //     })}
                        //     </tbody>
                        // </table>
                        :
                        <h1>No data...</h1>
                        // <div className="spinner-border" role="status">
                        //     <span className="sr-only"></span>
                        // </div>

                    }
                </div>
            </div>

            {/*    MODAL */}
            <Modal show={modalOchildimi} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedTask ? 'Edit task' : 'Add new task'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSaqlash}>
                        <Form.Group className="mb-3" controlId="formBasicTaskTitle">
                            <Form.Label>Task Title: </Form.Label>
                            <Form.Control defaultValue={selectedTask?.title} name={"title"} type="text"
                                          placeholder="Do homework..."/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTaskDescription">
                            <Form.Label>Task Description: </Form.Label>
                            <Form.Control defaultValue={selectedTask?.description} name={"description"} as="textarea" rows={3}/>
                        </Form.Group>

                        {/*<Form.Group className="mb-3" controlId="formBasicTaskDate">*/}
                        {/*    <Form.Label>Task Date: </Form.Label>*/}
                        {/*    <Form.Control name="issuedAt" type="date"/>*/}
                        {/*</Form.Group>*/}

                        <div className="float-end">
                            <Button onClick={handleClose} variant="warning" className="mx-2">Cancel</Button>
                            <Button type={'submit'} variant="success">Save</Button>
                        </div>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    );
};


export default Tasklar;