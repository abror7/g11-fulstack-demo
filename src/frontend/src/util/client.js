import axios from "axios";


const checkStatus = (response) => {
    if (response.status === 200) return response;
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error)
}


export const saveTask = async (newTask) => {
    const jovobData = await axios.post(
        'api/tasks',
        {...newTask},
        // {headers : {
        //     "Authorization" : "Bearer asdfasdfasdfasdf"
        //     }}
    )
        // .then((response) => checkStatus(response))
        .then(checkStatus)
        .then(res => {
            console.log(res.data)
            return res.data
        });

    return jovobData;
}

export const getTaskById = async (id) => {
    return await axios.get(`api/tasks/${id}`)
        .then(checkStatus)
        .then(res => {
            // console.log(res.data.data);
            return res.data.data;
        })
        .catch(err => {
            console.log(err);
        })
}
