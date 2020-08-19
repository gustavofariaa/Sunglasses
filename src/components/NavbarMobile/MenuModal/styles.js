import styled from 'styled-components';

export const Style = styled.main`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--color-white);
  z-index: 10;

  & > .header {
    width: 100%;
    height: var(--navbar-size);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & > .header .close {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5%;
  }

  & > .navigation {
    width: 80%;
    margin-top: 32px;
  }
  
  & > .navigation p {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 32px;
    text-transform: uppercase;
  }

  & > .navigation .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  } 

  & > .navigation .models .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    transform: rotate(-90deg);
  }

  & > .navigation .models .icon.back {
    transform: rotate(90deg);
  }

  & > .navigation .models .icon svg {
    width: 90%;
    height: 90%;
  }
  
  & > .navigation .models .icon svg path {
    fill: var(--color-primary);
  }

  & > .navigation .models p {
    font-weight: 700;
    color: var(--color-primary);
  }
`