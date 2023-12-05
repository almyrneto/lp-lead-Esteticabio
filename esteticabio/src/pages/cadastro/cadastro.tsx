import { ChangeEvent, useState } from 'react'
import Logo from '../../assets/icons/Logo'
import Banner from '../../assets/img/banner.png'
import { ButtonRegister } from '../../components/buttonRegister'
import { ButtonsNextBack } from '../../components/buttonsNextBack'
import { CheckBox } from '../../components/checkBox'
import { CepInput, Input } from '../../components/input'
import { Subtitulo } from '../../components/subtitulo'
import {
    Container,
    Container2,
    Container3,
    ContainerButton,
    ContainerCheckbox,
    ContainerInput,
    ContainerRegister,
    ContentLogo,
    InputCepNumber,
    Title,
    Title2
} from './styled'
import Confirmed from '../../assets/icons/Confirmed'
import axios from 'axios'
import { InputSelect } from '../../components/select'
import { Textarea } from '../../components/textarea'
import Asterisco from '../../assets/icons/Asterisco'

export const Cadastro = () => {

    const [showRegister, setShowRegister] = useState(true)
    const [showDateProfissional, setShowDateProfissional] = useState(false)
    const [showRegisterConfirmed, setShowRegisterConfirmed] = useState(false)
    const [isPessoaFisicaChecked, setIsPessoaFisicaChecked] = useState(false)
    const [isPessoaJuridicaChecked, setIsPessoaJuridicaChecked] = useState(false)
    const [cpf, setCPF] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereço, setEndereço] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [formCompleted, setFormCompleted] = useState(false)
    const [enderecoAutoPreenchido, setEnderecoAutoPreenchido] = useState('')

    const handleCepChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const cepValue = e.target.value

        setCep(cepValue)

        if (cepValue.length === 8) {
            try {
                const response = await axios.get(
                    `https://viacep.com.br/ws/${cepValue}/json/`
                )
                const { logradouro, bairro, localidade, uf } = response.data

                const enderecoCompleto = `${logradouro}, ${bairro}, ${localidade}, ${uf}`
                setEnderecoAutoPreenchido(enderecoCompleto)

                setEndereço(enderecoCompleto)
            } catch (error) {
                console.error('Erro ao buscar endereço:', error)
                setEnderecoAutoPreenchido('Endereço não encontrado')
                setEndereço('')
            }
        } else {
            setEnderecoAutoPreenchido('')
            setEndereço('')
        }
    }

    const validateForm = () => {
        if (
            (isPessoaFisicaChecked && cpf) ||
            (isPessoaJuridicaChecked && cnpj) ||
            email ||
            telefone ||
            endereço ||
            cep ||
            numero ||
            nome
        ) {
            setFormCompleted(true)
        } else {
            setFormCompleted(false)
        }
    }

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

    const handlePessoaFisicaChange = () => {
        setIsPessoaFisicaChecked(true)
        setIsPessoaJuridicaChecked(false)
        validateForm()
    }

    const handlePessoaJuridicaChange = () => {
        setIsPessoaJuridicaChecked(true)
        setIsPessoaFisicaChecked(false)
        validateForm()
    }

    const handleInputChange = () => {
        validateForm()
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
                                onChange={(e) => { setNome(e.target.value); handleInputChange() }}
                            />
                            <Container3>
                                <Asterisco />
                            </Container3>
                        </ContainerInput>
                        <ContainerCheckbox>
                            <CheckBox titulo='Pessoa Física' onChange={handlePessoaFisicaChange} checked={isPessoaFisicaChecked} />
                            <CheckBox titulo='Pessoa Jurídica' onChange={handlePessoaJuridicaChange} checked={isPessoaJuridicaChecked} />
                        </ContainerCheckbox>
                        {isPessoaFisicaChecked && (
                            <ContainerInput>
                                <Input
                                    placeholder='CPF'
                                    type='text'
                                    value={cpf}
                                    onChange={(e) => { setCPF(e.target.value); handleInputChange() }}
                                    width='400px'
                                />
                                <Container3>
                                    <Asterisco />
                                </Container3>
                            </ContainerInput>
                        )}
                        {isPessoaJuridicaChecked && (
                            <ContainerInput>
                                <Input
                                    placeholder='CNPJ'
                                    type='text'
                                    value={cnpj}
                                    onChange={(e) => { setCNPJ(e.target.value); handleInputChange() }}
                                    width='400px'

                                />
                                <Container3>
                                    <Asterisco />
                                </Container3>
                            </ContainerInput>
                        )}
                        <ContainerInput>
                            <Input
                                placeholder='E-mail'
                                type='email'
                                width='400px'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); handleInputChange() }}
                            />
                            <Container3>
                                <Asterisco />
                            </Container3>
                        </ContainerInput>
                        <ContainerInput>
                            <Input
                                placeholder='Telefone'
                                type='text'
                                width='400px'
                                value={telefone}
                                onChange={(e) => { setTelefone(e.target.value); handleInputChange() }}
                            />
                            <Container3>
                                <Asterisco />
                            </Container3>
                        </ContainerInput>
                        <Input
                            placeholder='Endereço'
                            type='text'
                            desabilitar
                            background
                            width='400px'
                            value={endereço}
                            onChange={(e) => { setEndereço(e.target.value); handleInputChange() }}
                            autoFill={enderecoAutoPreenchido}
                        />
                        <InputCepNumber>
                            <ContainerInput>
                                <CepInput
                                    placeholder='CEP'
                                    type='text'
                                    width='200px'
                                    value={cep}
                                    onChange={(e) => { setCep(e.target.value); handleInputChange(); handleCepChange(e) }}
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
                                    onChange={(e) => { setNumero(e.target.value); handleInputChange() }}
                                />
                                <Container3>
                                    <Asterisco />
                                </Container3>
                            </ContainerInput>
                        </InputCepNumber>
                    </ContainerRegister>
                    <ButtonsNextBack
                        name={'Continuar'}
                        iconNext
                        onClick={HandleSubmitNext}
                        disabled={!formCompleted}
                    />
                </Container2>
            }
            {showDateProfissional &&
                <Container2>
                    <ContainerRegister>
                        <Logo />
                        <ContainerButton>
                            <ButtonsNextBack name={'Voltar'} iconBack onClick={HandleSubmitBack} />
                        </ContainerButton>
                        <InputSelect placeholder='Profissão' />
                        <InputSelect placeholder='Categoria' />
                        <Textarea placeholder='Observação' />
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