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
    InputCepNumber
} from './styled'

export const Cadastro = () => {

    const [showRegister, setShowRegister] = useState(true)
    const [showDateProfissional, setShowDateProfissional] = useState(false)
    const teste1 = () => {
        setShowDateProfissional(true)
        setShowRegister(false)
    }
    const teste2 = () => {
        setShowRegister(true)
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
                    <ButtonsNextBack name={'Continuar'} iconNext onClick={teste1} />
                </Container2>
            }
            {showDateProfissional &&
                <Container2>
                    <ContainerRegister>
                        <Logo />
                        <ButtonsNextBack name={'Voltar'} iconBack onClick={teste2} />
                        <Input placeholder='Profissão' type='text' width='400px' />
                        <Input placeholder='Categoria' type='text' width='400px' />
                        <textarea placeholder='Observação' />
                        <ButtonRegister name='Cadastrar-se' />
                    </ContainerRegister>
                </Container2>
            }
        </Container>
    )
}