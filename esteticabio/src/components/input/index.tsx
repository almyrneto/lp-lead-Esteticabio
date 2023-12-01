import { InputStyle } from "./styled"

type InputProps = {
    type: string
    placeholder: string
    desabilitar?: boolean
    width: string
    background?: boolean
}

export const Input = ({
    type,
    placeholder,
    desabilitar,
    width,
    background }: InputProps) => {

    return (
        <>
            <InputStyle
                type={type}
                placeholder={placeholder}
                disabled={desabilitar}
                width={width}
                background={background} />
        </>
    )
}