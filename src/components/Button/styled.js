import styled, { css } from 'styled-components'
import Tick from './icon/tick.svg'

export default styled.button`
  padding: 15px 30px;
  border-radius: 2px;
  outline: none;
  border: none;
  width: 300px;
  position: relative;
  background-color: #999;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #888;
  }
  ${({ success }) =>
    success &&
    css`
      &:after {
        background-image: url(${Tick});
        position: absolute;
        content: '';
        width: 25px;
        height: 25px;
        right: 10px;
        top: 10px;
      }
    `};
`
