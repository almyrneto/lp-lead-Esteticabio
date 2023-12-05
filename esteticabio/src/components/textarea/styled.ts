import { styled } from "styled-components";
import { colors } from "../../theme";

interface StyledProps {
    isFocused: boolean
}

export const TextareaStyle = styled.textarea.attrs(() => ({
    as: "textarea",
})) <StyledProps>`
    width: 400px;
    height: 103px;
    border-radius: 16px;
    border: 1px solid ${(props) => (props.isFocused ? colors.verdePrincipal : colors.cinza1)};
    box-shadow: ${colors.boxshadow};
    padding-left: 1rem;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.cinza4};
    padding-top: 1rem;
    resize: none;
    &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: ${colors.cinza};
    }
    &:focus {
        border-color: ${colors.verdePrincipal} !important;
        outline: none;
}
`

