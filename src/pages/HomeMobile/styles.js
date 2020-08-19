import styled from 'styled-components'

export const Home = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 96px;
  
  & .container {
    width: var(--wrapper-width-mobile);
    flex-direction: column;
  }
`