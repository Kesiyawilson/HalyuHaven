import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import './Orders.css'; // Make sure this file exists

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="orders-container">
      <Title text1="MY" text2="ORDERS" />
      <div className="orders-list">
        {products.slice(0, 4).map((item, index) => (
          <div key={index} className="order-box">
            <div className="order-left">
              <img src={item.image[0]} alt="product" className="order-image" />
            </div>
            <div className="order-info">
              <p><strong>{item.name}</strong></p>
              <p>Price: <span>{currency}{item.price}</span></p>
              <p>Size: <span>M</span></p>
              <p>Quantity: <span>1</span></p>
              <p>Purchase Date: <span>2025-06-01</span></p>
              <div className="order-status">
                <span className="green-dot" /> Ready to ship
              </div>
              <button className="track-order-btn">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
