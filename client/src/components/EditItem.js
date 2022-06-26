import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DeleteItem from "./DeleteItem";
import ItemForm from "./ItemForm";

const EditItem = () => {
  const { id } = useParams();
  const [updateItem, setUpdateItem] = useState({});
  const navigate = useNavigate();

  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/item/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateItem(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editItemDB = (item) => {
    axios
      .put(`http://localhost:8000/api/item/${id}`, item)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <Link to="/">Dashboard</Link>
      <h3>Edit {updateItem.item}</h3>
      <ItemForm
        propItem={updateItem}
        handleSubmit={editItemDB}
        buttonText="Update Item"/>
      <DeleteItem id={updateItem._id}/>
    </div>
  );
};

export default EditItem