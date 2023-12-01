import { styled } from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
    display: flex;
    img {
        object-fit: cover;
        width: 100%;
        height: 969px;
    }
`

export const ContainerRegister = styled.div`
    background: ${colors.secundaria};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    textarea {
        width: 400px;
        height: 103px;
        border-radius: 16px;
        border: 1px solid ${colors.cinza1};
        box-shadow: ${colors.boxshadow};
        padding-left: 1rem;
        font-size: 16px;
        font-weight: 500;
        color: ${colors.cinza4};
        padding-top: 1rem;
        resize: none;
        &::placeholder{
            font-size: 14px;
            font-weight: 400;
            color: ${colors.cinza};
        }
    }

    `

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    margin: 0 auto;
    align-items: end;
`

export const InputCepNumber = styled.div`
    display: flex;
    gap: 0.8rem;
`

export const ContainerCheckbox = styled.div`
    width: 400px;
    display: flex;
    gap: 3rem;
`

