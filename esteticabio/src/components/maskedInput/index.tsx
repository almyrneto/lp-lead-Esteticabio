import { ChangeEvent } from "react"
import { StyledMaskedInput } from "./styled";

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

export const MaskedInput = ({
    value,
    onChange,
    mask,
    placeholder,
    width,
    type
}: MaskedInputProps) => {

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
            <StyledMaskedInput
                mask={mask}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                width={width}
                type={type}
            />
        </>
    )
}