import styled from 'styled-components'

export const Home = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & .container {
    width: var(--wrapper-width-web);
    padding-bottom: 56px;
  }
`

export const Info = styled.main`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
`

export const Preview = styled.main`
  width: 50%;
`
