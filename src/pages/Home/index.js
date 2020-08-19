import React, { useState } from 'react';

import {Home, Preview, Info} from './styles'

import GlassesImage from '../../components/Preview/GlassesImage';
import SelectGlassesImage from '../../components/Preview/SelectGlassesImage';

import ModelName from '../../components/Info/ModelName';
import Price from '../../components/Info/Price';
import Description from '../../components/Info/Description';
import Colors from '../../components/Info/Colors';
import PurchaseWeb from '../../components/Info/PurchaseWeb';

export default () => {
  const [imageNumber, setImageNumber] = useState(1);

  return (
    <Home>
      <div className="container">

        <Preview>
          <GlassesImage imageNumber={imageNumber} />
          <SelectGlassesImage imageNumber={imageNumber} setImageNumber={setImageNumber} />
        </Preview>

        <Info>
          <ModelName />
          <Price />
          <Description />
          <Colors />
          <PurchaseWeb />
        </Info>
        
      </div>
    </Home>
  );
};
