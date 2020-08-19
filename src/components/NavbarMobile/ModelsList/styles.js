import styled from 'styled-components';

export const Style = styled.main`
  & > .model-item {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  } 

  & > .model-item svg {
    width: 80px;
    height: auto;
    margin-right: 16px;
  } 

  & > .model-item svg path {
    fill: var(--color-secondary);
    stroke: var(--color-secondary);
  } 

  & > .model-item p {
    color: var(--color-primary);
  } 
`