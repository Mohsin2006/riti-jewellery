import React, { useState } from 'react';
import upload_area from "../../assets/upload_area.png";
import "./Add.css";
import axios from 'axios';

const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Jhumka",
    image: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onImageChangeHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setData(prevData => ({ ...prevData, image: file }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:4000/api/product/add", formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Jhumka",
          image: ""
        });
        setImage(null);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("There was an error uploading the product!", error);
    }
  };

  return (
    <div className='adds'>
      <form className='form' onSubmit={onSubmitHandler}>
        <div className='add-image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
          </label>
          <input type="file" id='image' hidden required onChange={onImageChangeHandler} />
        </div>

        <div className="add-name flex-col">
          <p>Add Name</p>
          <input type="text" name='name' value={data.name} required onChange={onChangeHandler} />
        </div>

        <div className="add-description flex-col">
          <p>Add Description</p>
          <textarea name='description' value={data.description} rows={4} required onChange={onChangeHandler} />
        </div>

        <div className="add-category-price flex-col">
          <div className="category-select">
            <p>Product Category</p>
            <select name="category" value={data.category} onChange={onChangeHandler}>
              <option value="earring">Ear Ring</option>
              <option value="jhumka">Jhumka</option>
              <option value="locket">Locket</option>
              <option value="chain">Chain</option>
              <option value="bracelett">Bracelett</option>
              <option value="fingerring">Finger Ring</option>
              <option value="neckless">Neckless</option>
              <option value="bala">Bala</option>
            </select>
          </div>
          <div className="price-input">
            <p>Add Price</p>
            <input type="number" name='price' value={data.price} required onChange={onChangeHandler} />
          </div>
        </div>
        <button className='add-btn' type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
