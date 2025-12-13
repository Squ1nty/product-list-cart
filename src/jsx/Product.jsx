import { useState } from 'react'

import ProductImg from './ProductImg'
import AddToCartBtn from './AddToCartBtn';
import ProductCartQuantity from './ProductCartQuantity';

function Product({ name, category, price, imageArray }){

  let [isActive, setState] = useState(false);
  let [amount, setAmount] = useState(1);

  return(
  <div className='w-full h-full flex flex-col gap-10'>
    <div className='relative'>
      <ProductImg images={imageArray} name={name} />
      <div className='addToCartBtn absolute -bottom-5 left-[18%] right-[18%] cursor-pointer outline-none [ hover:border-[var(--red)] focus:border-[var(--red)] transition-colors duration-150 ]' tabIndex={0}>
        {isActive ? <ProductCartQuantity amount={amount} setAmount={setAmount} setState={setState} /> : <AddToCartBtn setState={setState} />}
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