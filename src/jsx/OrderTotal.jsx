import { useState, useEffect } from 'react'

function OrderTotal({cartArray}){
  let [totalPrice, setTotal] = useState(0);
  let itemTotal = 0;

  useEffect(() => {
    setTotal(0);
    if(cartArray){
      cartArray.forEach(cartItem => {
        itemTotal = itemTotal + (cartItem.price * cartItem.amount);
      });
    }
    setTotal(itemTotal);
  }, [cartArray]);

  return(
    <div className='flex pb-3 justify-between items-center'>
      <p>Order Total</p>
      <p className='text-3xl text-[var(--rose-900)] font-[700]'>${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default OrderTotal