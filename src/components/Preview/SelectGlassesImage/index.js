import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import {Container, ArrowIcon} from './styles'

import glassesImages from '../../../assets/glasses';

import {Arrow} from '../../../assets/icons';

const SelectGlassesImage = ({glasses, imageNumber, setImageNumber}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(glassesImages[glasses.model].images)
  }, [glasses])

  const RenderGlasses = useCallback(number => {
    const Image = images[number] || null
    return Image ? <Image className='item' /> : <></>
  }, [images])

  const nextImage = () => {
    if (imageNumber === 4) return;
    setImageNumber(Math.abs(imageNumber + 1) % 5)
  }

  const previousImage = () => {
    if (imageNumber === 0) return;
    setImageNumber(Math.abs(imageNumber - 1) % 5)
  }

  return (
    <Container>

      <ArrowIcon   
        className={imageNumber === 0 ? 'end' : ''} 
        rotate={90} 
        onClick={previousImage}
    >
        <Arrow />
      </ArrowIcon>

      {images.map((image, index) => 
        <div className={`item-container ${imageNumber === index ? "selected" : ""}`} onMouseEnter={() => setImageNumber(index)} key={index}>
          {RenderGlasses(index)}
        </div>
      )}

      <ArrowIcon 
        className={imageNumber === 4 ? 'end' : ''} 
        rotate={-90} 
        onClick={nextImage}
      >
        <Arrow />
      </ArrowIcon>

    </Container>
  );
};

const mapStateToProps = state => ({ glasses: state.glasses })

export default connect(mapStateToProps)(SelectGlassesImage)