import React from 'react';

import {Models} from './styles'

import glassesList from '../../../assets/glasses';
import { GlassesIcons } from '../../../assets/icons';

export default ({handleChangeModel}) => {
  return (
    <Models>
      {  
        Object.keys(glassesList).reverse().map(model => {
          const GlassesIcon = GlassesIcons[model]
          return (
            <div className='model-item' key={model} onClick={() => handleChangeModel(model)}>
              <GlassesIcon />
              <p>{model.toUpperCase()}</p>
            </div>
          )
        })
      }
    </Models>
  );
};
