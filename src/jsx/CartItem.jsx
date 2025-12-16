function CartItem(){
  return(
    <div className='flex justify-between items-center py-3 w-full border-b-[1px] border-solid border-[var(--rose-100)]'>
      <div className='flex flex-col gap-2'>
        <p className='text-[var(--rose-900)] font-[600]'>Classic Tiramisu</p>
        <div className='flex gap-5'>
          <p className='text-[var(--red)] font-[600]'>1x</p>
          <div className='flex gap-3'>
            <p className='text-[var(--rose-300)]'>@ $5.50</p>
            <p className='text-[var(--rose-500)] font-[600]'>$5.50</p>
          </div>
        </div>
      </div>
      <div className='p-0.5 border-2 border-solid border-[#CAAFA7] rounded-[50%] cursor-pointer [ hover:brightness-50 transition-all duration-150 ]'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></div>
    </div>
  );
}

export default CartItem