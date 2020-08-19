import styled from 'styled-components'

export const Style = styled.div`
  & > .purchase {
    margin-top: 32px; 
    width: 100%;
    display: flex;
    align-items: center;
  }

  & > .purchase .icon {
    cursor: pointer;
    margin-left: 16px;
  }

  & > .purchase .icon svg path {
    transition: all .5s;
  }

  & > .purchase .icon:hover svg path {
    stroke: var(--color-secondary);
  }

  & > .purchase .icon.fill svg path {
    fill-opacity: 1;
    stroke: var(--color-secondary);
  }

  & > .purchase .button {
    cursor: pointer;
    width: 55%;
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