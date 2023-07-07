import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./style.css";
import "../style/card.css";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  const [cartitems,setItems] = useState([])
  const addToCart = (item) => {
    setItems([...cartitems, item]);

  };

  return (
    <>
      <div id="card-container">
        {book.map((item, index) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <div id="card" key={index} onClick={() => { setShow(true); setItem(item) }}>
                <img src={thumbnail} alt="" />
                <div id="bottom">
                  <h3 id="title">{item.volumeInfo.title}</h3>
                  <p id="amount">&#8377;{amount}</p>
                  <p id="count">Available count:{parseInt(amount%100)+11}</p>

                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <Modal show={show} item={bookItem} addToCart={addToCart}  onClose={() => setShow(false)} />
    </>
  );
};

export default Card;
