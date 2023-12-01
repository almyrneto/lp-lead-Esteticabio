import { styled } from "styled-components";
import { colors } from "../../theme";


export const SubtituloStyle = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-top: 2rem;
    color: ${colors.cinza6};
    span {
        padding-left: 1rem;
        border-left: solid 4px ${colors.verdePrincipal};
    }
    strong {
        padding-left: 1rem;
        border-left: solid 4px ${colors.secundaria};
    }
`