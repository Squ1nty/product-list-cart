function AddToCartBtn(){
  return(
    <div className='group absolute -bottom-5 left-[20%] right-[20%] flex items-center justify-center gap-2 px-6 py-3 bg-white border-[1px] border-[var(--rose-300)] rounded-[30px] cursor-pointer outline-none [ hover:border-[var(--red)] focus:border-[var(--red)] transition-colors duration-150 ]' tabIndex={0}>
      <img src="/images/icon-add-to-cart.svg" alt='Cart icon'></img>
      <p className='text-sm font-[600] text-[var(--rose-900)] outline-none [ group-hover:text-[var(--red)] group-focus:text-[var(--red)] transition-colors duration-150 ]'>Add to Cart</p>
    </div>
  );
}

export default AddToCartBtn 