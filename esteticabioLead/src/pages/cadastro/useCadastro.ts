import axios from "axios"
import { ChangeEvent, useState } from "react"
import { getCadastro } from "../../service/getCadastro/getCadastro"

export const UseCadastro = () => {
    const [showRegister, setShowRegister] = useState(true)
    const [showDateProfissional, setShowDateProfissional] = useState(false)
    const [showRegisterConfirmed, setShowRegisterConfirmed] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereço, setEndereço] = useState('')
    const [data, setData] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [formCompleted, setFormCompleted] = useState(false)
    const [enderecoAutoPreenchido, setEnderecoAutoPreenchido] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [uf, setUf] = useState('')
    const [complemento, setComplemento] = useState('')
    const [obs, setObs] = useState('')
    const obsProfissaoCategoria = `Observação: ${obs}\n`;
    const acao = 'criarLeadWebServiceByLandingPage'
    const hash = '12345'
    const caixaPostal = '97685'
    const cdtelefonetipo = '1'
    const empresa = ''
    const observacao = obsProfissaoCategoria
    const cdatividadetipo = '200'

    const cadastrar = async () => {
        const observacaoFormatada = observacao.replace(/\n/g, '\n');

        const result = await getCadastro(
            acao,
            nome,
            hash,
            email,
            observacaoFormatada,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            uf,
            municipio,
            caixaPostal,
            telefone,
            cdtelefonetipo,
            empresa,
            cdatividadetipo,
        )

        if (result?.message) {
            alert(result.message)
        } else {
        }
    }

    const validateForm = () => {
        const isEmailValid = validateEmail(email)

        if (
            isEmailValid &&
            telefone &&
            cep &&
            numero &&
            nome
        ) {
            setFormCompleted(true)
            setShowDateProfissional(true)
            setShowRegister(false)
        } else {
            setFormCompleted(false)
            alert('todos os campos sao obrigatorios')
        }
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }


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
                setLogradouro(logradouro)
                setMunicipio(localidade)
                setBairro(bairro)
                setUf(uf)
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


    const handleSubmitRegister = () => {
        setShowRegisterConfirmed(true)
        setShowRegister(false)
    }

    const handleInputChange = () => {
        validateForm()
    }

    return {
        showRegister,
        setShowRegister,
        showDateProfissional,
        setShowDateProfissional,
        showRegisterConfirmed,
        setShowRegisterConfirmed,
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
        formCompleted,
        setFormCompleted,
        enderecoAutoPreenchido,
        setEnderecoAutoPreenchido,
        complemento,
        setComplemento,
        obs,
        setObs,
        handleSubmitRegister,
        handleInputChange,
        handleCepChange,
        cadastrar,
        data,
        setData,
    }
}