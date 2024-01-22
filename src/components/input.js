
import styled from "styled-components";

export let Input = styled.input`
  all: unset;
  font-size: 24px;
  padding-right: 17px;
  border-radius: 5px;
  background-color: ${props => props.theme.inputBackground};
  color: ${props => props.theme.colors.cyan.strong};
  height: 48px;
  text-align: right;
  &:hover {
    outline: 2px solid ${props => props.theme.colors.cyan.strong};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;