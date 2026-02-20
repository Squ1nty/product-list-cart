function ProductImg({ images, name, isActive }){ 
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
    <img className={` ${ isActive ? "border-solid" : "border-transparent"} w-full object-cover object-center border-[2px] border-[var(--red)] rounded-[10px] transition-all duration-150 lg:h-full`} src={getImg()} alt={'Image of ' + name}></img>
  );
}

export default ProductImg