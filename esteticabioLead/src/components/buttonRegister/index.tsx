import { ButtonRegisterStyle } from "./styled"

type ButtonRegisterProps = {
    name: string,
    onClick?: () => void
}

export const ButtonRegister = ({ name, onClick }: ButtonRegisterProps) => {

    return (
        <div>
            <ButtonRegisterStyle onClick={onClick}>
                {name}
            </ButtonRegisterStyle>
        </div>
    )
}