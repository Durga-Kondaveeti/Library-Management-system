import React, { createContext, useState } from 'react';
import './style.css';
import '../style/Modal.css';

export const StateContext = createContext();

const Modal = ({ show, item, addToCart, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);
  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const cartDetailsHandler = (item) => {
    setCartItems([...cartItems, item]);
    addToCart(item);
    console.log(cartItems);
  };

  return (
    <StateContext.Provider value={cartItems}>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}><b>X</b></button>

          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>Author: {item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}<span><br />{item.volumeInfo.publishedDate}</span>
              </h4><br />
              <button onClick={() => cartDetailsHandler(item)}>Add to Cart</button>
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default Modal;
