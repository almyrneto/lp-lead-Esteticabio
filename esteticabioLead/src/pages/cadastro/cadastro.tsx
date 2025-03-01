import Logo from '../../assets/icons/Logo'
import { ButtonRegister } from '../../components/buttonRegister'
import { CepInput, EndInput, Input } from '../../components/input'
import { Subtitulo } from '../../components/subtitulo'
import {
    ButtonContainer,
    Container,
    Container2,
    Container3,
    ContainerInput,
    ContainerRegister,
    ContentLogo,
    InputCepNumber,
    Title,
    Title2,
} from './styled'
import { Textarea } from '../../components/textarea'
import Asterisco from '../../assets/icons/Asterisco'
import { UseCadastro } from './useCadastro'
import { MaskedInput } from '../../components/maskedInput'
import Confirmed from '../../assets/icons/Confirmed'

export const Cadastro = () => {
    const {
        showRegister,
        showRegisterConfirmed,
        nome,
        setNome,
        email,
        setEmail,
        telefone,
        setTelefone,
        endereço,
        setEndereço,
        cep,
        setCep,
        numero,
        setNumero,
        enderecoAutoPreenchido,
        complemento,
        setComplemento,
        obs,
        setObs,
        handleSubmitRegister,
        handleCepChange,
        cadastrar,
    } = UseCadastro()

    return (
        <Container>
            {showRegister &&
                <Container2>
                    <ContainerRegister>
                        <Logo />
                        <Subtitulo
                            texto="Faça parte da nossa jornada de beleza e explore"
                            texto2='o melhor em estética conosco!'
                        />
                        <ContainerInput>
                            <Input
                                placeholder='Nome'
                                type='text'
                                width='400px'
                                value={nome}
                                onChange={(e) => { setNome(e.target.value); }}
                            />
                            <Container3>
                                <Asterisco />
                            </Container3>
                        </ContainerInput>
                        <ContainerInput>
                            <Input
                                placeholder='E-mail'
                                type='email'
                                width='400px'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); }}
                            />
                            <Container3>
                                <Asterisco />
                            </Container3>
                        </ContainerInput>
                        <ContainerInput>
                            <MaskedInput
                                placeholder='Telefone'
                                mask='(99)99999-9999'
                                type='text'
                                width='400px'
                                maxLength={14}
                                value={telefone}
                                onChange={(e) => { setTelefone(e.target.value); }}
                            />
                            <Container3>
                                <Asterisco />
                            </Container3>
                        </ContainerInput>
                        <EndInput
                            placeholder='Endereço'
                            desabilitar
                            value={endereço}
                            onChange={(e) => { setEndereço(e.target.value); }}
                            autoFill={enderecoAutoPreenchido}
                        />
                        <InputCepNumber>
                            <ContainerInput>
                                <CepInput
                                    placeholder='CEP'
                                    type='text'
                                    width='200px'
                                    value={cep}
                                    onChange={(e) => { setCep(e.target.value); handleCepChange(e) }}
                                />
                                <Container3>
                                    <Asterisco />
                                </Container3>
                            </ContainerInput>
                            <ContainerInput>
                                <Input
                                    placeholder='Nº'
                                    type='text'
                                    width='178px'
                                    value={numero}
                                    onChange={(e) => { setNumero(e.target.value); }}
                                />
                                <Container3>
                                    <Asterisco />
                                </Container3>
                            </ContainerInput>
                        </InputCepNumber>
                        <ContainerInput>
                            <Input
                                placeholder='Complemento'
                                type='text'
                                width='400px'
                                value={complemento}
                                onChange={(e) => { setComplemento(e.target.value); }}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <Textarea
                                placeholder='Observação'
                                value={obs}
                                onChange={event => setObs(event.target.value)} />
                        </ContainerInput>
                    </ContainerRegister>
                    <ButtonContainer>
                        <ButtonRegister
                            name='Cadastrar-se'
                            onClick={() => { handleSubmitRegister(), cadastrar() }} />
                    </ButtonContainer>
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