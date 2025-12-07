import ProductImg from './ProductImg'
import AddToCartBtn from './AddToCartBtn';

function Product({ name, category, price, imageArray }){
  return(
  <div className='w-full h-full flex flex-col gap-10'>
    <div className='relative'>
      <ProductImg images={imageArray} name={name} />
      <AddToCartBtn />
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