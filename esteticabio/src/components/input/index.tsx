import { InputStyle } from "./styled"

type InputProps = {
    type: string
    placeholder: string
    desabilitar?: boolean
    width: string
    background?: boolean
    value?: string,
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
}: InputProps) => {

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
            />
        </>
    )
}