import React from "react";
import { useState, useEffect } from "react";

const ItemForm = ({ propItem, handleSubmit, buttonText })=> {
    const [item, setItem] = useState({});
    const [price, setPrice] = useState({});
    const [seller, setSeller] = useState({});
    const [desc, setDesc] = useState({});
    const [venmo, setVenmo] = useState({});
    
    useEffect(() => {
        setItem(propItem.item);
        setPrice(propItem.price);
        setSeller(propItem.seller);
        setDesc(propItem.desc);
        setVenmo(propItem.venmo);
    }, [propItem]);

    const submitHandler = (e) => {
        e.preventDefault();
        const formItem = {
            item: item,
            price: price,
            seller: seller,
            desc: desc,
            venmo: venmo,
        }
        handleSubmit(formItem)
    }
    
    return (
        <form onSubmit={submitHandler} className="item-form">
            <div className="form-field">
                <label>Item Name:</label>
                <input
                    onChange={ (e) => setItem(e.target.value) }
                    value={item}
                    name="item"
                    type="text"/>
            </div>
            <div className="form-field">
                <label>Price</label>
                <input
                    onChange={ (e) => setPrice(e.target.value) }
                    value={price}
                    name="price"
                    type="text"/>
            </div>
            <div className="form-field">
                <label>Seller Name:</label>
                <input
                    onChange={ (e) => setSeller(e.target.value) }
                    value={seller}
                    name="seller"
                    type="text"/>
            </div>
            <div className="form-field">
                <label>Description:</label>
                <textarea
                    onChange={ (e) => setDesc(e.target.value) }
                    value={desc}
                    name="desc"/>
            </div>
            <div className="form-field">
                <label>Venmo Handle:</label>
                <input
                    type="text"
                    onChange={ (e) => setVenmo(e.target.value) }
                    value={venmo}
                    name="venmo"/>
            </div>
            <input className="submit-input" type="submit" value={buttonText} />
        </form>
    );
};


export default ItemForm;



