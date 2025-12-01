import ProductGrid from './ProductGrid';

function ProductSection(){
  return(
    <section className='flex flex-col md:col-start-1 md:col-end-3 md:gap-8'>
      <div className='bg-blue-400'><h1 className='text-[var(--rose-900)] text-4xl font-[700] lg:text-5xl'>Desserts</h1></div>
      <ProductGrid />
    </section>
  );
}

export default ProductSection