import { CheckboxStyle, LabelStyle } from "./styled"

type CheckboxProps = {
    titulo: string,
}

export const CheckBox = ({ titulo }: CheckboxProps) => {

    return (
        <div>

            <CheckboxStyle type="checkbox" />
            <LabelStyle>{titulo}</LabelStyle>
        </div>
    )
}