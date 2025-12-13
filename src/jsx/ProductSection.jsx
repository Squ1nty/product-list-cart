import { useEffect, useState } from 'react';
import Product from './Product';

function ProductSection(){
  let [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try{
        const rawData = await fetch('/data.json');
        const jsonData = await rawData.json();

        setData(jsonData);
      }
      catch(error){
        console.log("Error: " + error);
      }
    }
    fetchData();
  }, []);
  
  return(
    <section className='flex flex-col gap-10 md:col-start-1 md:col-end-3'>
      <div><h1 className='text-[var(--rose-900)] text-4xl font-[700] lg:text-5xl'>Desserts</h1></div>
      <div className='grid grid-cols-1 gap-7 w-full h-full lg:grid-cols-2 xl:grid-cols-3'>
        {data && data.map(dataItem => (
          <Product key={dataItem.name} name={dataItem.name} category={dataItem.category} price={dataItem.price} imageArray={dataItem.image} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection