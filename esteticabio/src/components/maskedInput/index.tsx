import { ChangeEvent } from "react"
import InputMask from 'react-input-mask'
import { styled } from "styled-components";
import { colors } from "../../theme";

const StyledMaskedInput = styled(InputMask) <{ width: string, background?: boolean }>`
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

type MaskedInputProps = {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    mask: string
    placeholder: string
    type: string
    width: string
    maxLength: number
}

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '')

export const MaskedInput = ({ value, onChange, mask, placeholder, width, type }: MaskedInputProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange({
                ...event,
                target: {
                    ...event.target,
                    value: onlyNumbers(event.target.value)
                }
            })
        }

    }

    return (
        <>
            <StyledMaskedInput mask={mask}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                width={width}
                type={type}
            />
        </>
    )
}