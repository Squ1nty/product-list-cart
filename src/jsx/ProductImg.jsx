function ProductImg({ images }){
  function getImg(){
    if(window.innerWidth < 768){
      return images.mobile;
    }
    else if(window.innerWidth >= 768 && window.innerWidth <= 1440){
      return images.tablet;
    }
    else{
      console.log(images.desktop);
      return images.desktop;
    }
  }

  return(
    <img className='w-full object-cover object-center rounded-[10px] lg:h-full' src={getImg()}></img>
  );
}

export default ProductImg