import React from 'react';
import '../Style/Style.css'



const CarouselItem = ({slide}) => {
   
    const{image, prev, next, id} =slide;
    
    return (
        <div className='carousel-item relative w-full'>
       <div id={`slide${id}`} className="">
        
       <div className='banner-img'>
    <img src={image} className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
      <h1 className='text-5xl capitalize font-bold text-white'>affordable <br /> price for car <br />servicing</h1>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-[150%]">

      <p className='text-xl text-white'>
      There are many variations of passages of  available, but the majority have suffered alteration in some form
      </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-[220%]">
      <button className="btn btn-active mr-5">Button</button>
      <button className="btn btn-outline">Button</button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
        </div>       
    
  </div> 
       
    );
};

export default CarouselItem;