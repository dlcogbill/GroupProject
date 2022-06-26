import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DeleteItem from './DeleteItem';

function ViewItem() {
    const { id } = useParams();
    const [item, setItem] = useState({});

    console.log(id);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/item/${id}`)
            .then((response) => {
                console.log(response.data);
                setItem(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <Link to="/">Dashboard</Link>
            <h3>{item.item}</h3>
            <div className='item-form'>
                <div className="form-field">
                    <p>Price:</p>
                    <p>{item.price}</p>
                </div>
                <div className="form-field">
                    <p>Seller Name:</p>
                    <p>{item.seller}</p>
                </div>
                <div className="form-field">
                    <p>Description:</p>
                    <p>{item.desc}</p>
                </div>
                <div className="form-field">
                    <p>Venmo Handle:</p>
                    <p>{item.venmo}</p>
                </div>
                <div className="form-field">
                    <Link to={`/edit/${item._id}`}>Edit</Link>
                    <DeleteItem id={item._id} />
                </div>
            </div>
        </div>
    )
}

export default ViewItem