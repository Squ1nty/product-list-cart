import ProductImg from './ProductImg'

function Product({ name, category, price, imageArray }){
  return(
  <div className='w-full h-full flex flex-col gap-5'>
    <div>
      <ProductImg images={imageArray} />
    </div>
    <div className='flex flex-col'>
      <p>{category}</p>
      <p>{name}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  </div>
  );
}

export default Product