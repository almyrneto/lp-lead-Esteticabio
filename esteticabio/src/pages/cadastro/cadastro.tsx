import { useState } from 'react'
import Logo from '../../assets/icons/Logo'
import Banner from '../../assets/img/banner.png'
import { ButtonRegister } from '../../components/buttonRegister'
import { ButtonsNextBack } from '../../components/buttonsNextBack'
import { CheckBox } from '../../components/checkBox'
import { Input } from '../../components/input'
import { Subtitulo } from '../../components/subtitulo'
import {
    Container,
    Container2,
    ContainerCheckbox,
    ContainerRegister,
    ContentLogo,
    InputCepNumber,
    Title,
    Title2
} from './styled'
import Confirmed from '../../assets/icons/Confirmed'

export const Cadastro = () => {

    const [showRegister, setShowRegister] = useState(true)
    const [showDateProfissional, setShowDateProfissional] = useState(false)
    const [showRegisterConfirmed, setShowRegisterConfirmed] = useState(false)

    const HandleSubmitNext = () => {
        setShowDateProfissional(true)
        setShowRegister(false)
    }
    const HandleSubmitBack = () => {
        setShowRegister(true)
        setShowDateProfissional(false)
    }

    const HandleSubmitRegister = () => {
        setShowRegisterConfirmed(true)
        setShowDateProfissional(false)
    }

    return (
        <Container>
            <div>
                <img src={Banner} alt='Banner principal da pagina' />
            </div>
            {showRegister &&
                <Container2>
                    <ContainerRegister>
                        <Logo />
                        <Subtitulo texto="Faça parte da nossa jornada de beleza e explore" texto2='o melhor em estética conosco!' />
                        <Input placeholder='Nome' type='text' width='400px' />
                        <ContainerCheckbox>
                            <CheckBox titulo='Pessoa Física' />
                            <CheckBox titulo='Pessoa Jurídica' />
                        </ContainerCheckbox>
                        <Input placeholder='CPF' type='text' width='400px' />
                        <Input placeholder='E-mail' type='email' width='400px' />
                        <Input placeholder='Telefone' type='text' width='400px' />
                        <Input placeholder='Endereço' type='text' desabilitar background width='400px' />
                        <InputCepNumber>
                            <Input placeholder='CEP' type='text' width='214px' />
                            <Input placeholder='Nº' type='text' width='178px' />
                        </InputCepNumber>
                    </ContainerRegister>
                    <ButtonsNextBack name={'Continuar'} iconNext onClick={HandleSubmitNext} />
                </Container2>
            }
            {showDateProfissional &&
                <Container2>
                    <ContainerRegister>
                        <Logo />
                        <ButtonsNextBack name={'Voltar'} iconBack onClick={HandleSubmitBack} />
                        <Input placeholder='Profissão' type='text' width='400px' />
                        <Input placeholder='Categoria' type='text' width='400px' />
                        <textarea placeholder='Observação' />
                        <ButtonRegister name='Cadastrar-se' onClick={HandleSubmitRegister} />
                    </ContainerRegister>
                </Container2>
            }
            {showRegisterConfirmed &&
                <Container2>
                    <ContainerRegister>
                        <ContentLogo>
                            <Logo />
                        </ContentLogo>
                        <Title>Obrigada por se cadastrar!</Title>
                        <Title2>Entraremos em contato assim que possivel.</Title2>
                        <Confirmed />
                    </ContainerRegister>
                </Container2>
            }
        </Container>
    )
}