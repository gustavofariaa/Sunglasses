import React from 'react';

import {Style, Finalize} from './styles'

import { Logo, Trash, Cart } from '../../../assets/icons'
import { GlassesIcons } from '../../../assets/icons';

import hash from '../../../utils/hash'

export default ({visible, setVisible, cart, handleRemoveFromCart, handleCleanCart}) => {
  const handleModal = () => setVisible(!visible);

  const handleOnClickFinalize = () => {
    handleCleanCart()
    setVisible(!visible)
  }

  const calculateTotal = () => {
    if (!cart.glasses.length) return 0;
    const array = cart.glasses.map(glasses => glasses.value)
    const total = array.reduce((total, value) => total + value)
    return total
  }

  return (
    <>
      {
        visible ? 
          <Style>
            <div className="header">
              <div className="close">
                <Logo />
              </div>
            </div>

            {
              cart.glasses.length ?
                cart.glasses.map((glasses) => {
                  const GlassesIcon = GlassesIcons[glasses.model]
                  return (
                    <div className="cart-item" key={hash(glasses)}>
                      <GlassesIcon />
                      <div className='info'>
                        <p className="model">{glasses.model}</p>
                        <p className="value">R$ {glasses.value}</p>
                        <div className='colors'>
                          <span style={{backgroundColor: `${glasses.lensColor}`}}></span>
                          <span style={{backgroundColor: `${glasses.frameColor}`}}></span>
                          <span style={{backgroundColor: `${glasses.templeTipsColor}`}}></span>
                        </div>
                      </div>
                      <div onClick={() => handleRemoveFromCart(glasses)}>
                        <Trash />
                      </div>
                    </div>
                  )
                })
              :
              <div className="empty">
                <Cart />
                <p>Seu carrinho está vazio.</p>
              </div>
            }


            <div className="continue" onClick={handleModal}>
              <p>Continuar comprando</p>
            </div>

            <Finalize style={{display: `${calculateTotal() ? "flex" : "none"}`}}>
              <div className="finalize">
                <div className="total">
                  <p className="value">R$ {calculateTotal().toFixed(2)}</p>
                  <p>Em até 3x sem juros</p>
                </div>
                <div className="button" onClick={handleOnClickFinalize}>
                  FINALIZAR
                </div>
              </div>
              
            </Finalize>

          </Style>
        : 
          <></>
      }
    </>
  );
};
