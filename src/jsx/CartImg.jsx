import { useState, useEffect } from 'react'

function CartImg({ index, cartArray, isConfirmed }){
  let [imgSrc, setSrc] = useState("");

  useEffect(() => {
    setSrc(JSON.stringify(cartArray[index].image.thumbnail).replaceAll(`"`, ""))
  }, [isConfirmed]);

  return(
    <div className='w-[60px] grid place-items-center'>
      <img className='w-full rounded-[5px]' src={imgSrc ? imgSrc : null}></img>
    </div>
  );
}
export default CartImg