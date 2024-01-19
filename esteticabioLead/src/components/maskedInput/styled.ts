import { styled } from "styled-components";
import { colors } from "../../theme";
import InputMask from 'react-input-mask'

export const StyledMaskedInput = styled(InputMask) <{ width: string, background?: boolean }>`
    width:${({ width }) => width};
    height: 67px;
    border-radius: 16px;
    border: 1px solid ${colors.cinza1};
    box-shadow: ${colors.boxshadow};
    padding-left: 1rem;
    background:${({ background }) => background ? colors.cinza1 : ''} ;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.cinza4};

    
    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        color: ${colors.cinza};
    }

    &:focus {
        border-color: ${colors.verdePrincipal} !important;
        outline: none;
    }
`;