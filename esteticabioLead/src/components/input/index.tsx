import { useState } from "react"
import { DateInputStyle, EndInputStyle, InputStyle } from "./styled"
import { colors } from "../../theme"

type InputProps = {
    type: string
    placeholder: string
    desabilitar?: boolean
    width: string
    background?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    isFocused?: boolean
    autoFill?: string
}

type TextInputProps = {
    placeholder: string
    desabilitar?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    isFocused?: boolean
    autoFill?: string
}

type DateInputProps = {
    type: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
    type,
    placeholder,
    desabilitar,
    width,
    background,
    value,
    onChange,
    autoFill,
}: InputProps) => {

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <>
            <InputStyle
                type={type}
                placeholder={placeholder}
                disabled={desabilitar}
                width={width}
                background={background}
                value={value}
                onChange={onChange}
                style={{
                    borderColor: isFocused ? colors.verdePrincipal : colors.cinza1,
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete={autoFill ? 'off' : 'on'}
            />
        </>
    )
}

export const EndInput = ({
    placeholder,
    value,
    onChange,
    autoFill,
    desabilitar
}: TextInputProps) => {
    return (
        <>
            <EndInputStyle
                placeholder={placeholder}
                disabled={desabilitar}
                value={value}
                onChange={onChange}
                autoComplete={autoFill ? 'off' : 'on'}
            />
        </>
    )
}

export const CepInput = ({
    type,
    placeholder,
    width,
    background,
    value,
    onChange
}: InputProps) => {

    return (
        <>
            <Input
                type={type}
                placeholder={placeholder}
                width={width}
                onChange={onChange}
                background={background}
                value={value}
            />
        </>
    )
}

export const DateInput = ({ type, value, onChange }: DateInputProps) => {

    return (
        <>
            <DateInputStyle
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}