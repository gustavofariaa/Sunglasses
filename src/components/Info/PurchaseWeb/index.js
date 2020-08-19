import React, { useState } from 'react';
import {connect} from 'react-redux'

import {Style} from './styles'

import * as CartAction from '../../../store/actions/cart'

import {Heart} from '../../../assets/icons'

import hash from '../../../utils/hash'

const Info = ({glasses, cart, handleAddToCart, handleRemoveFromCart}) => {
  const [isFill, setIsFill] = useState(false)

  const currentGlassesOnCart = () => {
    const id = hash(glasses)
    const result = cart.glasses.filter(value => hash(value) === id)
    return !result.length
  }

  return (
    <Style>
      <div className="purchase">
        {
          currentGlassesOnCart() ?
            <div className="button" onClick={() => handleAddToCart(glasses)}>ADICIONAR AO CARRINHO</div>
          :
            <div className="button remove" onClick={() => handleRemoveFromCart(glasses)}>REMOVER DO CARRINHO</div>
        }
        <div 
          onClick={() => setIsFill(!isFill)} 
          className={`icon ${isFill ? "fill" : ""}`}
        >
          <Heart />
        </div>
      </div>
    </Style>
  );
};

const mapStateToProps = state => ({glasses: state.glasses, cart: state.cart})

const mapDispatchToProps = dispatch => ({
  handleAddToCart: (glasses) => dispatch(CartAction.addToCart(glasses)),
  handleRemoveFromCart: (glasses) => dispatch(CartAction.removeFromCart(glasses))
})

export default connect(mapStateToProps, mapDispatchToProps)(Info)