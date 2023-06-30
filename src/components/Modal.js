import React from 'react';
import './style.css'
import '../style/Modal.css'
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return( 
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><h2>x</h2></button>

                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>Author : {item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span><br/> {item.volumeInfo.publishedDate}</span></h4><br/>
                            <button> Add cart</button>
                            <a href={item.volumeInfo.previewLink}>
                            <button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;