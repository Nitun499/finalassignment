import React, { useState } from 'react';
import { SliderData } from '../Components/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const length = slides.length;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const preimage = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  };
  const nextimage = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
  };
  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="arrow-left" onClick={preimage} />
        <FaArrowAltCircleRight className="arrow-right" onClick={nextimage} />
        {/* {SliderData.map((slide,index)=>{
            return (
              <div className={current==index?'slide active':'slide'} key={index}>
              {index==current && <img src={slide.image} alt="startup image" className='image'/>}
              </div>
            )
            
          })} */}
        <img
          src={SliderData[current].image}
          alt="startup image"
          className={`image`}
        />
      </section>
    </>
  );
};

export default ImageSlider;
