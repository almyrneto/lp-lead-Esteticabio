import { styled } from "styled-components";
import { colors } from "../../theme";

export const CheckboxStyle = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${colors.verdePrincipal};
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    vertical-align: middle;

    &:checked {
    background-color: ${colors.verdePrincipal};
    border-color: ${colors.verdePrincipal};
}

    &:checked::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 1.5px;
    background-color: ${colors.lightSurface}; /* Cor do traço quando marcado */
    transform: rotate(-180deg);
    margin-bottom: 5px;
    margin-left: 2px;
}
`

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`