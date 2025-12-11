import { useState } from 'react'

import ProductImg from './ProductImg'
import AddToCartBtn from './AddToCartBtn';
import ProductCartQuantity from './ProductCartQuantity';

function Product({ name, category, price, imageArray }){

  const [ isActive, setState ] = useState(false);

  function handleClick(){
    setState(true);
  }

  return(
  <div className='w-full h-full flex flex-col gap-10'>
    <div className='relative'>
      <ProductImg images={imageArray} name={name} />
      <div className='addToCartBtn absolute -bottom-5 left-[20%] right-[20%] cursor-pointer outline-none [ hover:border-[var(--red)] focus:border-[var(--red)] transition-colors duration-150 ]' onClick={handleClick} tabIndex={0}>
        {isActive ? <ProductCartQuantity /> : <AddToCartBtn />}
      </div>
    </div>
    <div className='flex flex-col'>
      <p className='text-[var(--rose-500)] text-sm'>{category}</p>
      <p className='text-[var(--rose-900)] font-[600]'>{name}</p>
      <p className='text-[var(--red)] font-[600]'>${price.toFixed(2)}</p>
    </div>
  </div>
  );
}

export default Product