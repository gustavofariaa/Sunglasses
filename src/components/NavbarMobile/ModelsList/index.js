import React from 'react';

import {Style} from './styles'

import glassesList from '../../../assets/glasses';
import { GlassesIcons } from '../../../assets/icons';

export default ({setVisible, handleChangeModel}) => {
  const handleOnClickModel = (model) => {
    setVisible(false)
    handleChangeModel(model)
  };

  return (
    <Style>
      {  
        Object.keys(glassesList).reverse().map(model => {
          const GlassesIcon = GlassesIcons[model]
          return (
            <div className='model-item' key={model} onClick={() => handleOnClickModel(model)}>
              <GlassesIcon />
              <p>{model.toUpperCase()}</p>
            </div>
          )
        })
      }
    </Style>
  );
};
