import React ,{useState} from 'react'

import './search.css';

function Search(){
    
const [image, setimage] = useState("");
  

function imputdata(data){
    setimage(data.target.value);
}

   const source= `https://source.unsplash.com/900x500/?${image}`
    return(
        <>

        <div class="container">
        <input type="text"  placeholder="Search anything..." class="search__box"  onChange={imputdata} />
        <i class="fas fa-search search__icon" ></i>
      </div>
       <div  className='imagebox'>
       
       <img src={source} alt="" />

       </div>
        </>
    )
}

export default Search;