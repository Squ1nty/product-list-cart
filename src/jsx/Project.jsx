import { useState, useEffect } from 'react';
import Product from './Product';
import CartSection from './CartSection';
import OrderConfirmation from './OrderConfirmation';

function Project(){
  let [data, setData] = useState(null);
  let [dataStateArray, setState] = useState([]);
  let [dataQuantityArray, setQuantity] = useState([]);
  let [cartArray, setCart] = useState([]);
  let [cartCount, setCartCount] = useState(0);
  let [isEmpty, setProductState] = useState(true); // Remember to set this to "true"
  let [isConfirmed, setConfirmationState] = useState(false);
  let cartCounter = 0;

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
  function deleteCartItem(itemName){
    let index;
    /* 

      On click, .pop(), call updateState and updateAmount, boom and done

    */
    data.forEach(cartItem => {
      if(cartItem.name === itemName){
        index = data.indexOf(cartItem);
      }
    });
    let newArray = cartArray.filter(cartItem => cartItem.name !== itemName);
    setCart(newArray);
    updateAmount(index, 0);
    updateState(index, false);
  }

  useEffect(() => {
    let cartTempArray = []
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
          setCart(existingCart => {
            cartTempArray = [...existingCart];
            cartTempArray.push(dataItem);
            return cartTempArray; 
          });
        }
        else if(isAlreadyInCart(dataItem) && dataItem.isActive){ // Create condition for already in cart

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

  useEffect(() => {
    if(cartArray.length === 0 || cartArray.length === undefined){
      setProductState(true);
    }
    else{
      setProductState(false);
    }

    cartArray.forEach(cartItem => {
      cartCounter += cartItem.amount;
    });
    setCartCount(cartCounter)
  }, [cartArray]);

  return(
    <>
      {isConfirmed ? <OrderConfirmation cartArray={cartArray} deleteCartItem={deleteCartItem} /> : null}
      <div className='flex flex-col gap-7 w-full py-6 px-6 lg:py-24 lg:px-16 lg:grid lg:grid-cols-3'>
        <section className='flex flex-col gap-10 md:col-start-1 md:col-end-3'>
          <div><h1 className='text-[var(--rose-900)] text-4xl font-[700] lg:text-5xl'>Desserts</h1></div>
          <div className='grid grid-cols-1 gap-7 w-full h-full md:grid-cols-2 xl:grid-cols-3'>
            {data && data.map((dataItem, index) => (
              <Product key={index} index={index} name={dataItem.name} category={dataItem.category} price={dataItem.price} imageArray={dataItem.image} isActive={dataItem.isActive} updateState={updateState} amount={dataItem.amount} updateAmount={updateAmount} />
            ))}
          </div>
        </section>
        <CartSection isConfirmed={isConfirmed} setConfirmationState={setConfirmationState} cartArray={cartArray} deleteCartItem={deleteCartItem} cartCount={cartCount} isEmpty={isEmpty} />
      </div>
    </>
  );
}
export default Project