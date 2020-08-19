import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import {Image, Indicator} from './styles'

import glassesImages from '../../../assets/glasses';

import swipe from '../../../utils/swipe'

const GlassesImage = ({glasses, imageNumber, setImageNumber}) => {
  const [images, setImages] = useState([])

  const nextImage = useCallback(() => {
    const { length } = images
    const number = Math.abs(imageNumber + 1) % length
    imageNumber === 4 ? setImageNumber(length - 1) : setImageNumber(number)
  }, [imageNumber, images, setImageNumber])

  const previousImage = useCallback(() => {
    const { length } = images
    const number = Math.abs(imageNumber - 1) % length
    imageNumber === 0 ? setImageNumber(0) : setImageNumber(number)
  }, [imageNumber, images, setImageNumber])

  const doNothing = useCallback(() => {
    setImageNumber(imageNumber)
  }, [imageNumber, setImageNumber])

  useEffect(() => {
    swipe(nextImage, previousImage, doNothing, doNothing)
  }, [doNothing, nextImage, previousImage])

  useEffect(() => {
    setImages(glassesImages[glasses.model].images)
  }, [glasses])

  const RenderGlasses = useCallback(() => {
    const Image = images[imageNumber] || null
    return Image ? <Image /> : <></>
  }, [imageNumber, images])

  return (
    <Image id="image">
      {RenderGlasses()}
      <Indicator>
        <div className='indicator-container'>
        {
          images.map((_, index) => 
            <div 
              key={index} 
              className={`item ${imageNumber === index ? 'selected' : ''}`} 
            />
        )}
        </div>
      </Indicator>
    </Image>
  );
};

const mapStateToProps = state => ({ glasses: state.glasses })

export default connect(mapStateToProps)(GlassesImage)
