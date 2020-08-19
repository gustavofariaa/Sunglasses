import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;

  & svg {
    width: 100%;
    height: 160px;
  }
`
export const Indicator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  margin-top: 16px;

  & .indicator-container {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 20px;
  }

  & .item {
    background-color: var(--color-gray);
    width: 8px;
    height: 8px;
    margin: 4px;
    border-radius: 100%;
    transition: all .5s;
  }

  & .item.selected {
    background-color: var(--color-secondary);
  }
`