import { useEffect, useState } from 'react';
import Product from './Product';

function ProductGrid(){
  /*
  
    Call products from data.json here, use the 
    data received to pass props to TBD "Product.jsx"

    Pretty simple, I think, goodluck future me lol
  
  */

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
    <div className='grid grid-cols-1 gap-7 w-full h-full lg:grid-cols-2 xl:grid-cols-3'>
      {data && data.map(dataItem => (
        <Product key={dataItem.name} name={dataItem.name} category={dataItem.category} price={dataItem.price} imageArray={dataItem.image} />
      ))}
    </div>
  );
}

export default ProductGrid