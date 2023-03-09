import React, { useEffect } from 'react'
import axios from 'axios';



const ECommerce = () => {
    useEffect(() => {
    axios.get('https://dog.ceo/api/breed/hound/images/random')
       .then(res => console.log(res))
    },[])
  return (
    <div className='container'>
        <div>card</div>
    </div>
  )
}

export default ECommerce