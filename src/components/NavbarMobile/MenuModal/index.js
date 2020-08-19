import React, { useState } from 'react';
import {connect} from 'react-redux';

import {Style} from './styles'
import { Close, Arrow } from '../../../assets/icons'

import ModelsList from '../ModelsList'

const Modal = ({visible, setVisible, handleChangeModel}) => {
  const [isModels, setIsModels] = useState(false)
  const handleModal = () => setVisible(!visible);
  const handleModels= () => setIsModels(!isModels);

  return (
    <>
      {
        visible ? 
          <Style>
            <div className="header" onClick={handleModal}>
              <div className="close">
                <Close />
              </div>
            </div>

            <div className="navigation">
              <div className="item models" onClick={handleModels}>
                <p>Modelos</p>
                <div className={`icon ${isModels ? "back" : ""}`}>
                  <Arrow />
                </div>
              </div>

              {
                isModels ?
                  <ModelsList setVisible={setVisible} handleChangeModel={handleChangeModel} />
                : 
                  <>
                  <div className="item">
                    <p>Coleções</p>
                  </div>
                  <div className="item">
                    <p>Edições Especiais</p>
                  </div>
                  </>
              }
            </div>

          </Style>
        : 
          <></>
      }
    </>
  );
};

const mapSateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = dispatch => ({})

export default connect(mapSateToProps, mapDispatchToProps)(Modal);