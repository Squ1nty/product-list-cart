import CartImg from "./CartImg";
import DeleteItemComponent from "./DeleteItemComponent";
import ItemTotalPrice from "./ItemTotalPrice";

function CartItem({ cartArray, index, isConfirmed, itemName, itemPrice, itemAmount, deleteCartItem }){
  return(
    <>
    <div className='flex gap-4 md:text-lg'>
      {isConfirmed ? <CartImg index={index} cartArray={cartArray} isConfirmed={isConfirmed} /> : null}
      <div className='flex justify-between items-center py-3 w-full lg:gap-8'>
        <div className='flex flex-col gap-2 text-sm md:text-lg'>
          <p className='text-[var(--rose-900)] font-[600] text-nowrap overflow-hidden text-ellipsis max-w-[185px] md:max-w-[250px] lg:max-w-[175px] xl:max-w-[400px]'>{itemName}</p>
          <div className='flex gap-5'>
            <p className='text-[var(--red)] font-[600]'>{itemAmount}x</p>
            <div className='flex gap-3'>
              <p className='text-[var(--rose-300)]'>@ ${itemPrice.toFixed(2)}</p>
              { isConfirmed ? null : <ItemTotalPrice itemPrice={itemPrice} itemAmount={itemAmount} />}
            </div>
          </div>
        </div>
        {isConfirmed ? <ItemTotalPrice itemPrice={itemPrice} itemAmount={itemAmount} /> : <DeleteItemComponent itemName={itemName} deleteCartItem={deleteCartItem} /> }
      </div>
    </div>
    {isConfirmed ? <hr className='border-b-[1px] border-solid border-[var(--rose-300)] opacity-25'></hr> : <hr className='border-b-[1px] border-solid border-[var(--rose-100)]'></hr>}
    </>
  );
}

export default CartItem