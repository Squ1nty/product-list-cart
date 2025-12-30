import { useState, useEffect } from 'react';
import Product from './Product';
import CartSection from './CartSection';

function Project(){
  let [data, setData] = useState(null);
  let [dataStateArray, setState] = useState([]);
  let [dataQuantityArray, setQuantity] = useState([]);
  let [cartArray, setCart] = useState([]);

  useEffect(() => { // Pulls the data.json data and stores it as an object array, it then initialises the dataStateArray to a length of 9 and set all to false by default
    async function fetchData(){
      try{
        const rawData = await fetch('/data.json');
        const jsonData = await rawData.json();

        setState(new Array(jsonData.length).fill(false));
        setQuantity(new Array(jsonData.length).fill(0));
        setData(jsonData);
      }
      catch(error){
        console.log("Error: " + error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => { // Once dataStateArray changes i.e. gets filled in all false, it will then essentially "merge" it with the data.json array
    let newArray;
    if(dataStateArray && data){
      newArray = data.map((item, index) => ({
        ...item,
        amount: dataQuantityArray[index],
        isActive: dataStateArray[index],
      }));
      setData(newArray);
    }
  }, [dataStateArray && dataQuantityArray]);

  function updateAmount(index, newAmount){
    setData(oldData => {
      let newData = [...oldData];
      newData[index] = {
        ...oldData[index],
        amount: newAmount
      }
      return newData;
    });
  }

  function updateState(index, newState){
    if(newState === true){
      updateAmount(index, 1);
    }
    setData(oldData => {
      let newData = [...oldData];
      newData[index] = {
        ...newData[index],
        isActive: newState
      };
      return newData;
    });
  }

  useEffect(() => {
    console.log(cartArray);
  }, [cartArray]);

  useEffect(() => {
    console.log(data);
    let cartTempArray = [];

    function isAlreadyInCart(dataItem){
      if(cartArray.length === 0 || cartArray.length === undefined){
        return false;
      }
      return cartArray.some(cartItem => {
        if(cartItem.name === dataItem.name){
          return true;
        }
        return false;
      });
    }
    
    if(data){
      data.map(dataItem => {
        if(!isAlreadyInCart(dataItem) && dataItem.isActive){
          console.log("Entered 1st Condition");
          setCart(existingCart => {
            cartTempArray = [...existingCart];
            cartTempArray.push(dataItem);
            return cartTempArray; 
          });
        }
        else if(isAlreadyInCart(dataItem) && dataItem.isActive){ // Create condition for already in cart
          console.log("Entered 2nd Condition");
          setCart(existingCart => {
            cartTempArray = [...existingCart];
            cartTempArray.map(cartItem => {
              if(cartItem.name === dataItem.name){
                cartItem.amount = dataItem.amount;
              }
            });
            return cartTempArray;
          });
        }
        else if(isAlreadyInCart(dataItem) && !dataItem.isActive){ // Create condition for dataItem now being !isActive
          console.log("Entered 3rd Condition");
          setCart(existingCart => {
            cartTempArray = [...existingCart];
            let dataItemName = dataItem.name;
            let index = cartTempArray.findIndex(dataItem => dataItem.name === dataItemName);
            cartTempArray.splice(index, 1);
            return cartTempArray;
          });
        }
      });
    }
  }, [data]);

  return(
    <div className='flex flex-col gap-7 w-full py-8 px-6 md:p-24 md:grid md:grid-cols-3'>
      <section className='flex flex-col gap-10 md:col-start-1 md:col-end-3'>
        <div><h1 className='text-[var(--rose-900)] text-4xl font-[700] lg:text-5xl'>Desserts</h1></div>
        <div className='grid grid-cols-1 gap-7 w-full h-full lg:grid-cols-2 xl:grid-cols-3'>
          {data && data.map((dataItem, index) => (
            <Product key={index} index={index} name={dataItem.name} category={dataItem.category} price={dataItem.price} imageArray={dataItem.image} isActive={dataItem.isActive} updateState={updateState} amount={dataItem.amount} updateAmount={updateAmount} />
          ))}
        </div>
      </section>
      <CartSection/>
    </div>
  );
}
export default Project