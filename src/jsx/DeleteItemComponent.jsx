function DeleteItemComponent({ itemName, deleteCartItem }){
  function handleDelete(){
    deleteCartItem(itemName);
  }
  return(<button className='p-0.5 border-2 border-solid border-[#CAAFA7] rounded-[50%] cursor-pointer outline-none [ hover:brightness-50 focus:brightness-50 transition-all duration-150 ]' onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button>);
}
export default DeleteItemComponent