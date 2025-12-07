import ProductGrid from './ProductGrid';

function ProductSection(){
  return(
    <section className='flex flex-col gap-10 md:col-start-1 md:col-end-3'>
      <div><h1 className='text-[var(--rose-900)] text-4xl font-[700] lg:text-5xl'>Desserts</h1></div>
      <ProductGrid />
    </section>
  );
}

export default ProductSection