import React, { useRef } from "react"
import useSlider from "../../../hooks/useSlider"
import './slider.css'
import LeftArrow from '../../../img/svg/First/arrow-left.svg'
import RightArrow from '../../../img/svg/First/arrow-right.svg'

const Slider = ({ images }) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const slideTitle = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    slideTitle,
    images
  )

  return (
    <div className="slider">
      <div className="slider-content">
        <button className="slider__btn-left">
          <img onClick={goToPreviousSlide} src={LeftArrow}/>
        </button>
        <div className="slidercop" ref={slideImage}></div>
        <button className="slider__btn-right">
          <img onClick={goToNextSlide} src={RightArrow}/>
        </button>
      </div>
      <div className="slider-feature">
        <p ref={slideTitle} className="feature-title">We care about your safety</p>
        <p ref={slideText} className="feature-text"></p>
      </div>
    </div>
  )
}

export default Slider