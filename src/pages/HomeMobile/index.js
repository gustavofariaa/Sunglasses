import React, { useState } from 'react';

import {Home} from './styles'

import ModelName from '../../components/Info/ModelName';
import GlassesImage from '../../components/Preview/GlassesImageMobile';
import Description from '../../components/Info/Description';
import Colors from '../../components/Info/Colors';
import Purchase from '../../components/Info/PurchaseMobile';

export default () => {
  const [imageNumber, setImageNumber] = useState(1);

  return (
    <Home>
      <div className="container">
        <ModelName />
        <GlassesImage imageNumber={imageNumber} setImageNumber={setImageNumber} />
        <Colors />
        <Description />
        <Purchase />
      </div>
    </Home>
  );
}
