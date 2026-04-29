import React, { useState } from "react";
import { addProduct } from "../api";

function AddProduct() {
  const [product, setProduct] = useState({ name: "", price: "", farmer: "" });

  const handleAdd = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first");

    await addProduct(product, token);
    alert("Product added");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input placeholder="Name" onChange={e => setProduct({...product, name: e.target.value})} />
      <input placeholder="Price" onChange={e => setProduct({...product, price: e.target.value})} />
      <input placeholder="Farmer" onChange={e => setProduct({...product, farmer: e.target.value})} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddProduct;
