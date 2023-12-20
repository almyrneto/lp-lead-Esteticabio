import { styled } from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
    display: flex;
    img {
        object-fit: cover;
        width: 100%;
        height: 959px;
    }
`

export const ContainerRegister = styled.div`
    background: ${colors.secundaria};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    margin: 0 auto;
    align-items: end;
`

export const InputCepNumber = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const ContainerCheckbox = styled.div`
    width: 400px;
    display: flex;
    gap: 3rem;
`

export const ContentLogo = styled.div`
    margin-bottom: 15rem;
`

export const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: ${colors.cinza6};
`

export const Title2 = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: ${colors.cinza7};
`

export const ContainerButton = styled.div`
    padding-right: 17rem;
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
`

export const Container3 = styled.div`
    position: relative;
    right: 2rem;
`