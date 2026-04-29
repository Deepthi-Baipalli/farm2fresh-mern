const API = "http://localhost:5000/api";

export const registerUser = async (data) => {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getProducts = async () => {
  const res = await fetch(`${API}/products`);
  return res.json();
};

export const addProduct = async (product, token) => {
  const res = await fetch(`${API}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(product),
  });
  return res.json();
};
