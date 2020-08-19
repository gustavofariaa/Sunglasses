import styled from 'styled-components';

export const Dropdown = styled.div`
  z-index: 10;
  cursor: default;
  position: absolute;
  top: 56px;
  ${props => props.direction}: 0;
  width: auto;
  height: auto;
  overflow-y: auto;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-top: 0;

  & .container {
    width: 100%;
  }
`