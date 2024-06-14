import React, { useState } from "react";
import "./Add.css";
import upload_area from "../../assets/upload_area.png";
import axios from "axios";

const Add = () => {
  const [images, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Jhumka",
    image: "",
  });

  const onChangeHandler = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("images", images);

      const response = await axios.post(`http://localhost:4000/api/product/add`,formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Jhumka",
        });
        setImage(false);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
  };

  return (
    <div className="adds">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={images ? URL.createObjectURL(images) : upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e)=>setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-name flex-col">
          <p>Add Name</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            placeholder="type here"
          />
        </div>

        <div className="add-description flex-col">
          <p>Add Description</p>
          <textarea
            name="description"
            value={data.description}
            rows="6"
            placeholder="Write Content Here"
            onChange={onChangeHandler}
            required
          ></textarea>
        </div>

        <div className="add-category-price flex-col">
          <div className="category-select">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
            >
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
            <input
              type="Number"
              name="price"
              value={data.price}
              onChange={onChangeHandler}
              placeholder="$20"
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
