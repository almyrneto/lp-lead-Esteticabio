import { SubtituloStyle } from "./styled"

type SubtituloProps = {
    texto: string,
    texto2?: string,
}

export const Subtitulo = ({ texto, texto2 }: SubtituloProps) => {

    return (
        <>
            <SubtituloStyle>
                <span>
                    {texto}
                </span>
                <br></br>
                <strong>
                    {texto2}
                </strong>
            </SubtituloStyle>
        </>
    )
}