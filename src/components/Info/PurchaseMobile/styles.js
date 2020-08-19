import styled from 'styled-components'

export const Style = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  & > .purchase {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: var(--color-white);
    box-shadow: 0px -4px 32px rgba(0, 0, 0, 0.16);
  }

  & > .purchase .glasses-icon {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & > .purchase .glasses-icon svg {
    width: 80%;
    height: 80%;
  }

  & > .purchase .price {
    width: 60%;
  }

  & > .purchase .price p {
    font-family: 'Rubik', sans-serif;
    font-size: 12px;
    color: var(--color-dark-gray);
  }

  & > .purchase .price p.value {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-secondary);
    margin-bottom: 4px;
  }

  & > .purchase .button {
    cursor: pointer;
    min-width: 30%;
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
    transition: all .5s;
  }

  & > .purchase .button:hover {
    opacity: .8;
  }

  & > .purchase .button.remove {
    background-color: var(--color-dark-gray);
  }
`