import styled, { css } from 'styled-components'
import variables from 'common/styleVariables'

export const Overlay = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 140%;
  transform: translate3d(100%, 0, 0) skew(0deg);
  background-color: #c30928;
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.3s ease;
  border-radius: 2px;
  display: block;
`
export const Text = styled.span`
  transition: opacity 0.25s ease, transform 0.25s ease;
  z-index: 1;
  display: inline-block;
`

export const Button = styled.button`
  margin: 40px 0;
  overflow: hidden;
  color: ${variables.colors.white};
  display: block;
  cursor: pointer;
  font-family: ${variables.fonts.primary};
  font-weight: 700;
  position: relative;
  font-size: 1.3rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: 2px solid transparent;
  border-radius: 2px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  background-color: ${variables.colors.primary};
  width: 100%;
  max-width: 100%;
  padding: 15px 0 16px;
  &:before {
    content: attr(data-text);
    position: absolute;
    transform: translate3d(50%, 0, 0);
    opacity: 0;
    transition: opacity 0.25s ease, transform 0.25s ease;
    z-index: 1;
    display: inline-block;
  }
  &:hover {
    &:before {
      transform: translateZ(0);
      opacity: 1;
    }
    ${Text} {
      transform: translate3d(-50%, 0, 0);
      opacity: 0;
    }
    ${Overlay} {
      transform: translate3d(10%, 0, 0) skew(-20deg);
      opacity: 1;
    }
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      &:before {
        color: ${variables.colors.grey};
      }
      ${Overlay} {
        background-color: transparent;
      }
      ${Text} {
        color: ${variables.colors.grey};
      }
      &:hover {
        ${Text} {
          z-index: 1;
          display: inline-block;
          transform: translate3d(0, 0, 0);
          opacity: 1;
          color: ${variables.colors.black};
        }
        &:before {
          transform: translate3d(50%, 0, 0);
          opacity: 0;
        }
      }
    `};
`
