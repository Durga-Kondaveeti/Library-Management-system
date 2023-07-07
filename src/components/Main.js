import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";
import '../style/Main.css';
import Searchresult from './Searchresult';
import LoadingGif from '../images/loading.gif'
const Main = () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const [basedOn,setBasedOn]=useState("");
    const [loadingGif,setLoadingGif]=useState(true);
    const [showData, setShowData] = useState(false);
    const [cartItems, setCartItems] = useState([])
useEffect=(()=>
{
    const actualDelay = 2000; 
    const extendedDelay = 5000; 
    const loadingTimer = setTimeout(() => {
      setLoadingGif(false);
      setShowData(true);
    }, extendedDelay);
    const dataTimer = setTimeout(() => {
      if (!showData) {
        setLoadingGif(false);
        setShowData(true);
      }
    }, actualDelay);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(dataTimer);
    };
}, []);

    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        { setLoadingGif(true)
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+basedOn+search+'&key=AIzaSyBtfxCOOuUpw7Admsb-qEwCoXBGrAneqBc'+'&maxResults=40')
            .then(res=>{
              setData(res.data.items);
              setLoadingGif(false);
            })
            .catch((err) => {
              console.log(err);
              setLoadingGif(false);
            });
        }
    }

  return ( 
    <>
      <div className='header'>
      <div className="row1">
            <h1>Uncover Endless Worlds:<br/> Dive into the Pages of Our<br/> Enchanting Library!</h1>
        </div>
        <div className='row2'>
          
            <h2>find your book</h2>

            <div className='search'>
            <input type="text" placeholder="Type to Search ..." value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchBook }></input>
            <button><i className="fas fa-search"/></button>
            </div>
           
        </div>
        
      </div>
    <div className='container'>
       { loadingGif ? <img src={LoadingGif} alt="loading ..." style={{transitionDelay:'15s',width:'40rem',height:'40rem'}}/>:<Card book={bookData}/>}
    </div>
    </>
  )
}

export default Main
