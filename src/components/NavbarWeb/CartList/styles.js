import styled from 'styled-components';

export const Models = styled.div`
  width: 224px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  & > p {
    font-family: 'Barlow Condensed', sans-serif;
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
    letter-spacing: .5px;
    font-weight: 500;
  }

  & > p.empty {
    color: var(--color-dark-gray);
    font-weight: normal;
  }

  & > .cart-item {
    cursor: default;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    margin: 8px 0;
    padding-left: 12px;
  }

  & > .cart-item svg {
    cursor: pointer;
    width: 16px;
    margin-top: 8px;
  }

  & > .cart-item > svg {
    width: 40px;
    margin-top: 16px;
  }

  & > .cart-item > svg path {
    fill: var(--color-black);
    stroke: var(--color-black);
  }

  & > .cart-item > .info {
    width: 90px;
    padding: 0 14px;
  }

  & > .cart-item > .info p.model {
    letter-spacing: 1px;
    color: var(--color-dark-gray);
    text-transform: capitalize;
    font-size: 14px;
  }

  & > .cart-item > .info p.value {
    font-family: 'Rubik', sans-serif;
    color: var(--color-black);
    font-size: 14px;
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

  & .total {
    position: absolute;
    bottom: 0;
    height: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 24px;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-gray);
  }

  & .total > p {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 12px;
    color: var(--color-dark-gray);
  }

  & .total > p.value {
    margin-left: 8px;
    color: var(--color-black);
    font-weight: 700;
  }
`