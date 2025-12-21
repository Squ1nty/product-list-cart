function ProductCartQuantity({ index, updateState, amount, updateAmount }){
  let currentAmount;
  if(amount === 0){
    currentAmount = 1;
  }
  if(amount > 0){
    currentAmount = amount;
  }

  function handleDecrement(){
    if(currentAmount !== 1){
      currentAmount -= 1;
      updateAmount(index, currentAmount);
    }
    else if(currentAmount === 1){
      updateState(index, false);
      updateAmount(index, 0);
    }
  }
  function handleIncrement(){
    currentAmount += 1;
    updateAmount(index, currentAmount);
  }

  return(
    <>
      <div className='flex justify-between items-center bg-[var(--red)] px-3 py-3 rounded-[30px] w-full h-full'>
        <div className='group border-[1px] px-1 py-2 rounded-[50%] [ hover:bg-white transition-colors duration-150 ]' onClick={handleDecrement}><svg className='fill-white [ group-hover:fill-[var(--red)] transition-colors duration-150 ]' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" alt='Decrement Item Quantity Icon'><path d="M0 .375h10v1.25H0V.375Z"/></svg></div>
        <p className='text-white'>{currentAmount}</p>
        <div className='group border-[1px] p-1 rounded-[50%] [ hover:bg-white transition-colors duration-150 ]' onClick={handleIncrement}><svg className='fill-white [ group-hover:fill-[var(--red)] transition-colors duration-150 ]' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg></div>
      </div>
    </>
  );
}

export default ProductCartQuantity