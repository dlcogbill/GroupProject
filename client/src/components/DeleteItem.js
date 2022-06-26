import axios from 'axios';
import React from 'react'

function DeleteItem({ id }) {
    const handleDeleteitem = (event) => {
        event.preventDefault()
        axios
            .delete(`http://localhost:8000/api/item/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("error deleting item", err.response);
            });
    };
    return (
        <button onClick={handleDeleteitem} className="delete">Delete</button>
    )
}

export default DeleteItem