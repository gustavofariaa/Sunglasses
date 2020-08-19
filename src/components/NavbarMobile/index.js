import React, { useState } from 'react';
import {connect} from 'react-redux';

import {Nav, CartIcon} from './styles'

import { Logo, Cart, Menu } from '../../assets/icons'

import * as GlassesAction from '../../store/actions/glasses'
import * as CartAction from '../../store/actions/cart'

import MenuModal from './MenuModal'
import CartModal from './CartModal'

const Navbar = ({cart, handleChangeModel, handleRemoveFromCart, handleCleanCart}) => {
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const handleMenuModal = () => setMenuModalVisible(!menuModalVisible);
  const handleCartModal = () => setCartModalVisible(!cartModalVisible);

  return (
    <>
      <MenuModal 
        visible={menuModalVisible} 
        setVisible={setMenuModalVisible} 
        handleChangeModel={handleChangeModel} 
      />

      <CartModal 
        visible={cartModalVisible} 
        setVisible={setCartModalVisible} 
        cart={cart} 
        handleRemoveFromCart={handleRemoveFromCart} 
        handleCleanCart={handleCleanCart} 
      />
      
      <Nav>
        <div className="container">
          <Logo />

          <div className="items-container">
            <div className='cart-item' onClick={handleCartModal}>
              <CartIcon>
                <Cart />
                <span><p>{cart.quantity}</p></span>
              </CartIcon>
            </div>

            <div className='menu-item' onClick={handleMenuModal}> 
              <Menu />
            </div>
          </div>

        </div>
      </Nav>
    </>
  );
};

const mapSateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = dispatch => ({
  handleChangeModel: model => dispatch(GlassesAction.changeModel(model)),
  handleRemoveFromCart: glasses => dispatch(CartAction.removeFromCart(glasses)),
  handleCleanCart: glasses => dispatch(CartAction.cleanCart(glasses)),

})

export default connect(mapSateToProps, mapDispatchToProps)(Navbar);