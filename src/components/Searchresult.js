import React from 'react'
import '../style/Searchresult.css'
const Searchresult = ({answer,sample}) => {

        const handleClick = () => {
          sample(answer.title);
        };

    
   
    return (
        <div>
        <button onClick={handleClick}  className='searchValues'>{answer.title}</button>
        
        </div>
    )
}

export default Searchresult;
