import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from './productsSlice';
import './Products.css';
import { addAsync } from '../cart/cartSlice';

export function Products() {
  const products = useSelector(state=>state.product.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAsync())
  },[])
  return (
    <div>
      {
        products.map(product=>
        <div className="card" key={product.id}>
        <img src={product.thumbnail} alt="Denim Jeans" style={{width:"100%"}} />
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p><button onClick={()=> dispatch(addAsync(product))}>Add to Cart</button></p>
      </div>
      )}
        
    </div>
  );
}
