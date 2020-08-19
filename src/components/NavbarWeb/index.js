import React, { useState } from 'react';
import {connect} from 'react-redux';

import {Nav, CartIcon} from './styles'

import * as GlassesAction from '../../store/actions/glasses'
import * as CartAction from '../../store/actions/cart'

import { Arrow, Cart, Logo } from '../../assets/icons'

import Dropdown from './Dropdown'
import ModelsList from './ModelsList'
import CartList from './CartList'

const Navbar = ({cart, handleChangeModel, handleRemoveFromCart}) => {
  const [dropdownModel, setDropdownModel] = useState(false)
  const [dropdownCart, setDropdownCart] = useState(false)

  return (
    <Nav>
      <div className="container">
        <Logo />
        
        <div className="navigation">
          <div 
            className={`nav-item ${dropdownModel ? "active" : ""}`} 
            onMouseEnter={() => setDropdownModel(true)}
            onMouseLeave={() => setDropdownModel(false)}
          >
            MODELOS <Arrow />
            <Dropdown 
              visible={dropdownModel} 
              setVisible={setDropdownModel} 
              Component={<ModelsList handleChangeModel={handleChangeModel} />} 
            />
          </div>

          <div className="nav-item">
            COLEÇÕES
          </div>
          <div className="nav-item">
            EDIÇÕES ESPECIAIS
          </div>
        </div>

        <div 
          className='cart-item'
          onMouseEnter={() => setDropdownCart(true)}
          onMouseLeave={() => setDropdownCart(false)}
        >
          <CartIcon>
            <Cart />
            <span><p>{cart.quantity}</p></span>
          </CartIcon>
          <Dropdown 
            visible={dropdownCart}
            setVisible={setDropdownCart} 
            direction='right'
            Component={<CartList cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} 
          />
        </div>
      </div>
    </Nav>
  );
};

const mapSateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = dispatch => ({
  handleChangeModel: model => dispatch(GlassesAction.changeModel(model)),
  handleRemoveFromCart: glasses => dispatch(CartAction.removeFromCart(glasses)),
})

export default connect(mapSateToProps, mapDispatchToProps)(Navbar);