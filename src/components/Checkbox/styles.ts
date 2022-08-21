import styled from "styled-components";


export const Container = styled.label`
  font-weight: bold;
  line-height: 1.1;

  display: flex;
  align-items: center;
  padding: 4px 0;
  cursor: pointer;

  > label {
    margin-left: 12px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
  }

  input[type="checkbox"] {
    margin: 0;

    color: currentColor;
    width: 24px;
    height: 24px;

    background-color: ${props => props.theme.primary};

    border: 0.001em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
  }
  
  input[type="checkbox"]:checked {
    margin: 0;

    color: currentColor;
    width: 24px;
    height: 24px;

    background-color: ${props => props.theme.primary};

    border: 0.001em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
  }
`;