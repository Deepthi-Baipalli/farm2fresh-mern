import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <h1>Farm2Fresh</h1>
      <Register />
      <Login />
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
