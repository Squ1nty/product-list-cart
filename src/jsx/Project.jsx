import ProductSection from './ProductSection';
import CartSection from './CartSection';

function Project(){
  return(
    <div className='flex flex-col h-svh w-full py-8 px-6 md:p-24 md:grid md:grid-cols-3'>
      <ProductSection />
      <CartSection/>
    </div>
  );
}
export default Project