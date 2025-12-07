function ProductImg({ images, name }){
  function getImg(){
    if(window.innerWidth < 1024){
      return images.mobile;
    }
    else if(window.innerWidth >= 1024 && window.innerWidth <= 1440){
      return images.tablet;
    }
    else{
      console.log(images.desktop);
      return images.desktop;
    }
  }

  return(
    <img className='w-full object-cover object-center rounded-[10px] lg:h-full' src={getImg()} alt={'Image of ' + name}></img>
  );
}

export default ProductImg