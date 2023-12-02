import { CheckboxStyle, ContainerCheckboxStyle, LabelStyle } from "./styled"

type CheckboxProps = {
    titulo: string,
    disabled?: boolean,
    checked?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const CheckBox = ({ titulo, disabled, onChange, checked }: CheckboxProps) => {

    return (
        <ContainerCheckboxStyle>
            <CheckboxStyle type="checkbox" disabled={disabled} onChange={onChange} checked={checked} />
            <LabelStyle>{titulo}</LabelStyle>
        </ContainerCheckboxStyle>
    )
}