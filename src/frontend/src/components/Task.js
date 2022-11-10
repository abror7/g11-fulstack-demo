import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const Task = () => {

    const [tasks, setTasks] = useState([]);


    const tasklarniServerdanOlish = () => {
        axios.get('/api/tasks')
            .then(jovob => {
                    setTasks(jovob.data.data)
                }
            )
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(
        () => {
            tasklarniServerdanOlish();
        },
        []
    )

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


    return (
        <div>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h1 className={'text-center'}>TASKLARIM</h1>
                    {tasks.length > 0 ?
                        <table className="table table-dark mb-5">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tasks.map((vazifa, index) => {
                                return <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{vazifa.title}</td>
                                    <td>{vazifa.timestamp}</td>
                                    <td>
                                        {/*EDIT BUTTON*/}
                                        <button
                                            className="btn btn-warning"
                                        >EDIT
                                        </button>
                                        {/*DELETE BUTTON*/}
                                        <button
                                            onClick={() => deleteVazifaById(vazifa.id)}
                                            className="btn btn-danger"
                                        >DELETE
                                        </button>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                        :
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Task;