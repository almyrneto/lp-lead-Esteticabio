import { useState } from "react"
import { TextareaStyle } from "./styled"
import { colors } from "../../theme"


type TextareaProps = {
    placeholder: string,
    isFocused?: boolean,
    value: string,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}



export const Textarea = ({
    placeholder,
    value,
    onChange
}: TextareaProps) => {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <>
            <TextareaStyle
                placeholder={placeholder}
                style={{
                    borderColor: isFocused ? colors.verdePrincipal : colors.cinza1,
                }}
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                onChange={onChange}
            />
        </>
    )
}