import { useState } from 'react';

function AddToCartBtn(){
  let [isActive, setActive] = useState(false);

  function handleClick(){
    setActive(!isActive);
  }

  return(
    <div className='addToCartBtn absolute -bottom-5 left-[20%] right-[20%] cursor-pointer outline-none [ hover:border-[var(--red)] focus:border-[var(--red)] transition-colors duration-150 ]' onClick={handleClick} tabIndex={0}>
      <div className={`${isActive ? 'hidden' : 'flex'} group items-center justify-center gap-2 bg-white px-6 py-3 rounded-[30px] border-[1px] border-[var(--rose-300)] w-full h-full`}>
        <img src="/images/icon-add-to-cart.svg" alt='Cart icon'></img>
        <p className='text-sm font-[600] text-[var(--rose-900)] outline-none [ group-hover:text-[var(--red)] group-focus:text-[var(--red)] transition-colors duration-150 ]'>Add to Cart</p>
      </div>
      <div className={` ${isActive ? 'flex' : 'hidden'} justify-between items-center bg-[var(--red)] px-3 py-3 rounded-[30px] w-full h-full`}>
        <div className='group border-[1px] px-1 py-2 rounded-[50%] [ hover:bg-white transition-colors duration-150 ]'><svg className='fill-white [ group-hover:fill-[var(--red)] transition-colors duration-150 ]' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" alt='Decrement Item Quantity Icon'><path d="M0 .375h10v1.25H0V.375Z"/></svg></div>
        <p className='text-white'>1</p>
        <div className='group border-[1px] p-1 rounded-[50%] [ hover:bg-white transition-colors duration-150 ]'><svg className='fill-white [ group-hover:fill-[var(--red)] transition-colors duration-150 ]' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg></div>
      </div>
    </div>
  );
}

export default AddToCartBtn 