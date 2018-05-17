import styled, { css } from 'styled-components'
import variables from 'common/styleVariables'

export const Placeholder = styled.div`
  position: absolute;
  font-weight: 300;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: ${variables.colors.grey};
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 3.2rem;
  font-size: 1.4rem;
  padding: 0.9rem 1.6rem 0.6rem;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  z-index: 1;
  color: ${variables.colors.black};
  font-family: ${variables.fonts.primary};
  position: relative;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 1.8rem 1.3rem 0.4rem;
  &:focus {
    ~ ${Placeholder} {
      transform: translate3d(-2px, -10px, 0);
      letter-spacing: 1.7px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1rem;
      line-height: 3.2rem;
      padding: 0.9rem 1.6rem 0.6rem;
    }
  }
  ~ ${Placeholder} {
    ${({ typed }) =>
      typed &&
      css`
        transform: translate3d(-2px, -10px, 0);
        letter-spacing: 1.7px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
        line-height: 3.2rem;
        padding: 0.9rem 1.6rem 0.6rem;
      `};
  }
`
export const Border = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: border-color 0.3s;
`

export const InputError = styled.div`
  font-size: 1.2rem;
  color: ${variables.colors.primary};
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  transform: translate3d(0, -8px, 0);
  transition: opacity 0.3s, transform 0.3s;
  line-height: 1.8rem;
`

export const Wrapper = styled.label`
  background: transparent;
  position: relative;
  margin: 40px 0;
  width: 100%;
  display: block;
  cursor: text;
  transition: border-color 0.3s, margin-bottom 0.3s;
  ${({ hasError }) =>
    hasError &&
    css`
      ${Border} {
        border-color: ${variables.colors.primary};
      }
      ${Input} {
        color: ${variables.colors.primary};
      }
      ${Placeholder} {
        color: ${variables.colors.primary};
      }
      ${InputError} {
        opacity: 1;
        transform: translateZ(0);
      }
    `};
`
