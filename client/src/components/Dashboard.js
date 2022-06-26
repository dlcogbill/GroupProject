import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemForm from './ItemForm';
import DeleteItem from './DeleteItem';


const Dashboard = () => {
  const [allitems, setAllitems] = useState([]);
  const newItem = {
    item: '',
    price: '',
    seller: '',
    desc: '',
    venmo: '',
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/item")
      .then((response) => {
        console.log(response.data);
        setAllitems(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [])

  const addItemDB = (item) => {
    axios
      .post('http://localhost:8000/api/item', item)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);;
      })
  }

  return (
    <div className="container">
      <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Seller</th>
                <th scope="col">Actions Available</th>
              </tr>
            </thead>
            <tbody>
              {allitems.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td><Link to={`/view/${item._id}`} >{item.item}</Link></td>
                    <td>{item.price}</td>
                    <td>{item.seller}</td>
                    <td>
                      <Link to = {`/sell/${item._id}`}><button className="btn btn-primary">Sell/Buy</button></Link>
                      <Link to={`/edit/${item._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                      <DeleteItem id={item._id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      <h3>Add an Item to Sell</h3>
      <ItemForm
        propItem={newItem}
        handleSubmit={addItemDB}
        buttonText="Add Item" />
    </div>
  );
};


export default Dashboard