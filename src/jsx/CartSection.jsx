import { useState, useEffect } from 'react';
import ActiveCart from './ActiveCart';
import EmptyCart from './EmptyCart';

function CartSection({ cartArray }){
  let [cartCount, setCartCount] = useState(0);
  let [isEmpty, setState] = useState(true); // Remember to set this to "true"

  useEffect(() => {
    if(cartArray.length === 0 || cartArray.length === undefined){
      setState(true);
    }
    else{
      setState(false);
    }

    setCartCount(cartArray.length);
  }, [cartArray]);

  return(
    <section className='flex flex-col h-fit w-full p-6 bg-white rounded-[10px] md:col-start-3 md:col-end-4'>
      <h2 className='text-[var(--red)] font-[700] text-2xl'>Your Cart ({cartCount})</h2>
      {isEmpty ? <EmptyCart /> : <ActiveCart cartArray={cartArray} />}
    </section>
  );
}

export default CartSection