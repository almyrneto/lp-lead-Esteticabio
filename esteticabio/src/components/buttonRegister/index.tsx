import { ButtonRegisterStyle } from "./styled"

type ButtonRegisterProps = {
    name: string,
}

export const ButtonRegister = ({ name }: ButtonRegisterProps) => {

    return (
        <div>
            <ButtonRegisterStyle>
                {name}
            </ButtonRegisterStyle>
        </div>
    )
}