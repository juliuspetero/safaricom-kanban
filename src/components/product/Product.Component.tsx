import React from 'react';
import AddToCart from './AddToCart';
import styles from './Product.Component.module.css';

const ProductComponent = () => {
  return (
    <div className={styles.cardContainer + 'p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'} >
       <AddToCart />
    </div>
  )
}

export default ProductComponent
