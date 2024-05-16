import axios from "axios";

export function fetchItems() {
  return axios.get('http://localhost:8080/cart')
}

export function addItem(item) {
  const {id, title, description, price, brand, thumbnail} = item
  return axios.post('http://localhost:8080/cart', {id, title, description, price, brand, thumbnail, quantity:1})
}

export function updateItem(id, updateItem) {
  console.log({id, updateItem});
  return axios.patch(`http://localhost:8080/cart/${id}`, updateItem)
}

export function deleteItem(id){
  return axios.delete(`http://localhost:8080/cart/${id}`)
}