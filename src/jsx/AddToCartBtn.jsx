function AddToCartBtn(){
  return(
    <>
      <div className='flex group items-center justify-center gap-2 bg-white px-6 py-3 rounded-[30px] border-[1px] border-[var(--rose-300)] w-full h-full'>
        <img src="/images/icon-add-to-cart.svg" alt='Cart icon'></img>
        <p className='text-sm font-[600] text-[var(--rose-900)] outline-none [ group-hover:text-[var(--red)] group-focus:text-[var(--red)] transition-colors duration-150 ]'>Add to Cart</p>
      </div>
    </>
  );
}

export default AddToCartBtn 