function ItemTotalPrice({ itemPrice, itemAmount }){
  return(<p className='text-[var(--rose-900)] font-[600]'>${(itemAmount * itemPrice).toFixed(2)}</p>);
}

export default ItemTotalPrice