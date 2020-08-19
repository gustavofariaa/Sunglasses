import React, { useState } from 'react';
import {connect} from 'react-redux'

import {Style} from './styles'

import * as GlassesAction from '../../../store/actions/glasses'

const LENS_COLORS = ['#232323', '#97E946', '#FE546F', '#6246E9']
const FRAME_COLORS = ['#232323', '#AAA9AD', '#E8E8E8', '#CAA472']
const TEMPLE_TIPS_COLORS = ['#232323', '#97E946', '#FE546F', '#6246E9']

const Colors = ({glasses, handleChangeFrameColor, handleChangeTempleTipsColor, handleChangeLensColor}) => {
  const [lensColor, setLensColor] = useState(glasses.lensColor)
  const [frameColor, setFrameColor] = useState(glasses.frameColor)
  const [templeTipsColor, setTempleTipsColor] = useState(glasses.templeTipsColor)

  const handleOnClickColor = (handleChangeColor, handleSetColor, color) => {
    handleChangeColor(color)
    handleSetColor(color)
  }

  const isSelectedColor = (currentColor, color) => currentColor === color ? 'selected' : ''

  return (
    <Style>
      <p className="title">Cores</p>
      <div className="colors">
        <div className="colors-wrapper">
          <p className="title">Lente</p>
          <div className="colors-container">
            {
              LENS_COLORS.map(color => 
                <div 
                  key={color}
                  className={`color ${isSelectedColor(lensColor, color)}`}
                  onClick={() => handleOnClickColor(handleChangeLensColor, setLensColor, color)} 
                  style={{backgroundColor: color}} 
                />
              )
            }
          </div>
        </div>

        <div className="colors-wrapper">
          <p className="title">Armação</p>
          <div className="colors-container">
            {
              FRAME_COLORS.map(color => 
                <div 
                  key={color}
                  className={`color ${isSelectedColor(frameColor, color)}`}
                  onClick={() => handleOnClickColor(handleChangeFrameColor, setFrameColor, color)} 
                  style={{backgroundColor: color}} 
                />
              )
            }
          </div>
        </div>

        <div className="colors-wrapper">
          <p className="title">Borracha</p>
          <div className="colors-container">
            {
              TEMPLE_TIPS_COLORS.map(color => 
                <div 
                  key={color}
                  className={`color ${isSelectedColor(templeTipsColor, color)}`}
                  onClick={() => handleOnClickColor(handleChangeTempleTipsColor, setTempleTipsColor, color)} 
                  style={{backgroundColor: color}} 
                />
              )
            }
          </div>
        </div>
      </div>
    </Style>
  );
};

const mapStateToProps = state => ({glasses: state.glasses})

const mapDispatchToProps = dispatch => ({
  handleChangeFrameColor: (color) => dispatch(GlassesAction.changeFrameColor(color)),
  handleChangeTempleTipsColor: (color) => dispatch(GlassesAction.changeTempleTipsColor(color)),
  handleChangeLensColor: (color) => dispatch(GlassesAction.changeLensColor(color)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Colors)