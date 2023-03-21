import React, { useEffect } from 'react'
import axios from 'axios';



const ECommerce = () => {
    useEffect(() => {
    axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json')
       .then(res => console.log(res))
    },[])
  return (
    <div className='container'>
        <div>card</div>
    </div>
  )
}

export default ECommerce