import ArrowLeft from "../../assets/icons/ArrowLeft"
import ArrowRight from "../../assets/icons/ArrowRight"
import { ButtonNextBackStyle } from "./styled"

type ButtonsNextBackProps = {
    name: string
    iconBack?: boolean
    iconNext?: boolean
    onClick?: () => void
}

export const ButtonsNextBack = ({ name, iconBack, iconNext, onClick }: ButtonsNextBackProps) => {

    return (
        <>
            <ButtonNextBackStyle type="button" onClick={onClick}>
                {iconBack ? <ArrowLeft /> : ''}
                {name}
                {iconNext ? <ArrowRight /> : ''}
            </ButtonNextBackStyle>
        </>
    )
}