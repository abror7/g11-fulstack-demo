import React from 'react';
import {getTaskById} from "../../util/client";
import {useLoaderData} from "react-router-dom";

export const loader = ({params}) => {
    return getTaskById(params.taskId)
        .then(task => task)

}

const TaskById = () => {

    const taskById = useLoaderData();

    return (
        <div >
            <h1>Task by ID : {taskById.id}</h1>


            <hr/>
            <h2>Task Title: {taskById.title}</h2>
            <h3>Description: {taskById.description}</h3>
            <p>sdfgasdfasdfsdf</p>
            <p><span className="100">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Blanditiis eaque eos eveniet
                excepturi libero nihil nobis non, nostrum odit qui soluta
                tempora veritatis. Ab architecto expedita fugit incidunt
                officia pariatur.</span>
            </p>
        </div>
    );
};

export default TaskById;