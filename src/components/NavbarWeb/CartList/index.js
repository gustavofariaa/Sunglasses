import React from 'react';

import {Models} from './styles'

import { GlassesIcons, Trash } from '../../../assets/icons';

import hash from '../../../utils/hash'

export default ({cart, handleRemoveFromCart}) => {
  return (
    <Models>
      {
        cart.glasses.length ?
          <>
            {
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
            }
            <div className='total'>
              <p>TOTAL</p> 
              <p className="value">R$ {cart.total.toFixed(2)}</p>
            </div>
          </>
        : 
          <p className="empty">Seu carrinho está vazio.</p>
      }
    </Models>
  );
};
