import React from 'react';
import './style.css';

const TaskCard = (props) => {

    const {title, date} = props;
    return (
        <div className={'task-card col-md-2 mx-2 mt-5'}>
            <h6>{title}</h6>
            <p>{date}</p>
        </div>
    );
};

export default TaskCard;