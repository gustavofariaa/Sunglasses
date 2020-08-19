import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .item-container {
    width: 80px;
    height: 80px;
    background-color: var(--color-light-gray);
    opacity: .2;
    transition: all .5s;
  }

  & .item-container:hover,
  & .item-container.selected {
    opacity: 1;
  }

  & .item-container svg {
    width: 100%;
    height: 100%;
  }
`

export const ArrowIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;
    transform: ${props => `rotate(${props.rotate}deg)`};
  }

  & > svg path {
    transition: all .5s;
  }

  &.end,
  &.end > svg path {
    cursor: default;
    fill: var(--color-gray);
  }
`