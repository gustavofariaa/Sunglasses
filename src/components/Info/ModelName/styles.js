import styled from 'styled-components'

export const Style = styled.div`
  & > .edition {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-black);
  }

  & > .model {
    font-family: 'Barlow', sans-serif;
    text-transform: capitalize;
    color: var(--color-primary);
    font-size: 56px;
    font-weight: 700;
  }

  @media only screen and (max-width: 912px) {
    padding-top: 32px;
    & > .model {
      margin-top: -4px;
    }
  }
`