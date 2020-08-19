import styled from 'styled-components';

export const Models = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > .model-item {
    width: 100%;
    display: flex;
    padding: 14px;
  }

  & > .model-item:hover {
    background-color: var(--color-light-gray);
    cursor: pointer;
  }

  & > .model-item svg {
    width: 40px;
  }

  & > .model-item svg path {
    fill: var(--color-secondary);
    stroke: var(--color-secondary);
  }

  & > .model-item > p {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    padding-left: 14px;
    color: var(--color-primary);
    font-size: 13px;
    font-weight: 400;
  }
`