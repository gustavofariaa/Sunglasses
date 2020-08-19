import styled from 'styled-components'

export const Style = styled.div`
  & > .title {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-black);
  }

  & > .colors {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & > .colors .colors-wrapper {
    width: 28%;
    margin-top: 8px;
  }

  & > .colors .colors-container {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
  }

  & > .colors .title {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 12px;
    text-transform: capitalize;
    color: var(--color-dark-gray);
  }

  & > .colors .color {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    border-radius: 20px;
    transition: all .2s;
  }

  & > .colors .color.selected {
    width: 28px;
    height: 28px;
    opacity: 1;
  }

  @media only screen and (max-width: 912px) {
    & > .colors {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    & > .colors .colors-wrapper {
      width: 100%;
    }

    & > .colors .colors-container {
      width: 60%;
      height: 40px;
      margin-bottom: 8px;
    }

    & > .colors .color {
      cursor: pointer;
      width: 32px;
      height: 32px;
      margin-right: 4px;
      border-radius: 20px;
      transition: all .2s;
    }

    & > .colors .color.selected {
      width: 40px;
      height: 40px;
      opacity: 1;
    }
  }
`