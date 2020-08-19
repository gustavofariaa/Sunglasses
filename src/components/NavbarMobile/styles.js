import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 8;

  width: 100%;
  height: var(--navbar-size);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray);
  background-color: var(--color-white);

  & .container {
    height: 100%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    width: var(--wrapper-width-mobile);
  }

  & .items-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  & .menu-item,
  & .cart-item {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .menu-item {
    margin-bottom: 2px;
  }
`

export const CartIcon = styled.div`
  position: relative;
  display: flex;
  width: 32px;
  height: 32px;

  & > span {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary);
    border: 2px solid var(--color-white);
    border-radius: 100%;
  }

  & > span p {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: var(--color-white);
  }
`