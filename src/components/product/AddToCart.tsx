'use client';
import React, {useState} from 'react';

const AddToCart = () => {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        console.log('Clicked')
        setCount(count + 1);
        console.log(count);
    };
  return (
    <div>
        <button onClick={ handleClick}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
