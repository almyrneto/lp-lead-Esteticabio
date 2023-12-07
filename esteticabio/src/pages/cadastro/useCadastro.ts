import axios from "axios"
import { ChangeEvent, useState } from "react"
import { getCadastro } from "../../service/getCadastro/getCadastro"


export const UseCadastro = () => {
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
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [uf, setUf] = useState('')
    const acao = 'criarLeadWebServiceByLandingPage'
    const hash = '12345'
    const complemento = ''
    const caixaPostal = ''
    const cdTelefoneTipo = '1'
    const empresa = ''
    const observacao = ''

    const cadastrar = async () => {
        const result = await getCadastro(
            acao,
            nome,
            hash,
            email,
            observacao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            uf,
            municipio,
            caixaPostal,
            telefone,
            cdTelefoneTipo,
            empresa,
        )

        if (result?.message) {
            alert(result.message)
        } else {
            alert('cadastro efetuado com sucesso')
        }
    }

    const validateForm = () => {
        if (
            (isPessoaFisicaChecked && cpf) ||
            (isPessoaJuridicaChecked && cnpj) &&
            email &&
            telefone &&
            endereço &&
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
                setMunicipio(municipio)
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

    const handleSubmitNext = () => {

        validateForm()
    }
    const handleSubmitBack = () => {
        setShowRegister(true)
        setShowDateProfissional(false)
    }

    const handleSubmitRegister = () => {
        setShowRegisterConfirmed(true)
        setShowDateProfissional(false)
    }

    const handlePessoaFisicaChange = () => {
        setIsPessoaFisicaChecked(true)
        setIsPessoaJuridicaChecked(false)
    }

    const handlePessoaJuridicaChange = () => {
        setIsPessoaJuridicaChecked(true)
        setIsPessoaFisicaChecked(false)
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
        isPessoaFisicaChecked,
        setIsPessoaFisicaChecked,
        isPessoaJuridicaChecked,
        setIsPessoaJuridicaChecked,
        cpf,
        setCPF,
        cnpj,
        setCNPJ,
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
        handleSubmitNext,
        handleSubmitBack,
        handleSubmitRegister,
        handlePessoaFisicaChange,
        handlePessoaJuridicaChange,
        handleInputChange,
        handleCepChange,
        cadastrar,

    }
}