import styled from 'styled-components';

export const Style = styled.main`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 96px;
  padding-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--color-white);
  z-index: 10;

  & > .header {
    position: fixed; 
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--navbar-size);
    border-bottom: 1px solid var(--color-gray);
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .cart-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 16px 0;
    width: 80%;
  }

  & .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    opacity: .6;
  }

  & .empty svg {
    width: 40px;
    height: 40px;
  }

  & .empty path {
    fill: var(--color-dark-gray);
  }

  & .empty p {
    margin-top: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
    letter-spacing: .5px;
    color: var(--color-dark-gray);
  }

  & > .cart-item svg {
    cursor: pointer;
    width: 20px;
    margin-top: 8px;
  }

  & > .cart-item > svg {
    width: 64px;
    height: auto;
    margin-top: 16px;
  }

  & > .cart-item > svg path {
    fill: var(--color-black);
    stroke: var(--color-black);
  }

  & > .cart-item > .info {
    width: 128px;
    padding: 0 14px;
  }

  & > .cart-item > .info p.model {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    color: var(--color-dark-gray);
    text-transform: capitalize;
    font-size: 18px;
  }

  & > .cart-item > .info p.value {
    font-family: 'Rubik', sans-serif;
    color: var(--color-black);
    font-size: 18px;
    margin-top: 2px;
    font-weight: 700;
  }

  & > .cart-item > .info .colors {
    width: 40px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
  }
  
  & > .cart-item > .info .colors > span {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: red;
  }

  & > .continue p {
    font-family: 'Barlow', sans-serif;
    color: var(--color-primary);
    margin-top: 48px;
    margin-bottom: 18px;
  }
`

export const Finalize = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 11;

  & > .finalize {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: var(--color-white);
    box-shadow: 0px -4px 32px rgba(0, 0, 0, 0.16);
  }

  & > .finalize .button {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: var(--color-secondary);
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-white);
  }

  & > .finalize .total p {
    font-family: 'Rubik', sans-serif;
    font-size: 12px;
    color: var(--color-dark-gray);
  }

  & > .finalize .total p.value {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-black);
    margin-bottom: 4px;
  }
`