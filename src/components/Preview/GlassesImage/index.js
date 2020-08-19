import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import {Image} from './styles'

import glassesImages from '../../../assets/glasses';

const GlassesImage = ({glasses, imageNumber=1}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(glassesImages[glasses.model].images)
  }, [glasses])

  const RenderGlasses = useCallback(() => {
    const Image = images[imageNumber] || null
    return Image ? <Image /> : <></>
  }, [imageNumber, images])

  return (
    <Image>
      {RenderGlasses()}
    </Image>
  );
};

const mapStateToProps = state => ({ glasses: state.glasses })

export default connect(mapStateToProps)(GlassesImage)