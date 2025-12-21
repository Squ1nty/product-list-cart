import ProductImg from './ProductImg'
import AddToCartBtn from './AddToCartBtn';
import ProductCartQuantity from './ProductCartQuantity';

function Product({ index, name, category, price, imageArray, isActive, updateState, amount, updateAmount }){
  return(
  <div className='w-full h-full flex flex-col gap-10'>
    <div className='relative'>
      <ProductImg images={imageArray} name={name} />
      <div className='addToCartBtn absolute -bottom-5 left-[18%] right-[18%] cursor-pointer outline-none [ hover:border-[var(--red)] focus:border-[var(--red)] transition-colors duration-150 ]' tabIndex={0}>
        {isActive ? <ProductCartQuantity key={index} index={index} updateState={updateState} amount={amount} updateAmount={updateAmount} /> : <AddToCartBtn key={index} index={index} updateState={updateState} />}
      </div>
    </div>
    <div className='flex flex-col'>
      <p className='text-[var(--rose-500)] text-sm'>{category}</p>
      <p className='text-[var(--rose-900)] font-[600]'>{name}</p>
      <p className='text-[var(--red)] font-[600]'>${price.toFixed(2)}</p>
    </div>
  </div>
  );
}

export default Product