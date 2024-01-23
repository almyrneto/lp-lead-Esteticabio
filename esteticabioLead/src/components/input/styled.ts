import { styled } from "styled-components";
import { colors } from "../../theme";


export const InputStyle = styled.input<{ width: string, background?: boolean }>`
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
`

export const EndInputStyle = styled.textarea`
    width: 400px;
    height: 67px;
    border-radius: 16px;
    border: 1px solid ${colors.cinza1};
    box-shadow: ${colors.boxshadow};
    padding-left: 1rem;
    padding-top: 1.5rem;
    background: ${colors.cinza1};
    font-size: 16px;
    font-weight: 500;
    resize: none;

    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        color: ${colors.cinza};
    }
`

export const DateInputStyle = styled.input`
    width: 175px;
    height: 67px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 16px;
    border: 1px solid ${colors.cinza1};
    box-shadow: ${colors.boxshadow};
    font-size: 16px;
    font-weight: 500px;
    background-color: white;
    background-repeat: no-repeat;

    &:focus {
        border-color: ${colors.verdePrincipal} !important;
        outline: none;
    }

`

export const CalendarIconStyle = styled.div`
    position: relative;
    right: 2.5rem;
`

