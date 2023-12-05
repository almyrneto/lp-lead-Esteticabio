import ArrowLeft from "../../assets/icons/ArrowLeft"
import ArrowRight from "../../assets/icons/ArrowRight"
import { ButtonNextBackStyle } from "./styled"

type ButtonsNextBackProps = {
    name: string
    iconBack?: boolean
    iconNext?: boolean
    onClick?: () => void
    disabled?: boolean
}

export const ButtonsNextBack = ({ name, iconBack, iconNext, onClick, disabled }: ButtonsNextBackProps) => {

    return (
        <>
            <ButtonNextBackStyle type="button" onClick={onClick} disabled={disabled}>
                {iconBack ? <ArrowLeft /> : ''}
                {name}
                {iconNext ? <ArrowRight /> : ''}
            </ButtonNextBackStyle>
        </>
    )
}