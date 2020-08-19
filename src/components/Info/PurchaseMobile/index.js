import React from 'react';
import {connect} from 'react-redux'

import {Style} from './styles'

import * as CartAction from '../../../store/actions/cart'

import {GlassesIcons} from '../../../assets/icons'

import hash from '../../../utils/hash'

const Info = ({glasses, cart, handleAddToCart, handleRemoveFromCart}) => {
  const currentGlassesOnCart = () => {
    const id = hash(glasses)
    const result = cart.glasses.filter(value => hash(value) === id)
    return !result.length
  }

  return (
    <Style>
      <div className="purchase">

        {(() => {
          const GlassesIcon = GlassesIcons[glasses.model]
          return (
            <div className="glasses-icon">
              <GlassesIcon />
            </div>
          )
        })()}

        <div className="price">
          <p className="value">R$ {glasses.value}</p>
          <p>Em até 3x sem juros</p>
        </div>

        {
          currentGlassesOnCart() ?
            <div className="button" onClick={() => handleAddToCart(glasses)}>COMPRAR</div>
          :
            <div className="button remove" onClick={() => handleRemoveFromCart(glasses)}>REMOVER</div>
        }
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