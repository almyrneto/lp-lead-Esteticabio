import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { getCadastro } from "../../service/getCadastro/getCadastro"
import { parseString } from "xml2js";

interface OptionType {
    value: string;
    label: string
}[]

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
    const [complemento, setComplemento] = useState('')
    const [profissao, setProfissao] = useState('')
    const [categoria, setCategoria] = useState([])
    const teste = categoria?.map(nome => nome)
    // const teste2 = teste?.map(nome => nome)
    console.log(teste !== undefined ? teste[0] : '')
    const [obs, setObs] = useState('')
    const [selectedOptionsProfissao, setSelectedOptionsProfissao] = useState<OptionType | null>(null);
    const [selectedOptionsCategoria, setSelectedOptionsCategoria] = useState<OptionType | null>(null);
    const obsProfissaoCategoria =
        `Profissão: ${profissao} \n `
        + `Categoria: ${categoria} \n `
        + `Observação: ${obs} \n `
    const acao = 'criarLeadWebServiceByLandingPage'
    const hash = '12345'
    const caixaPostal = ''
    const cdTelefoneTipo = '1'
    const empresa = ''
    const observacao = obsProfissaoCategoria

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

    const fetchCategoria = async (): Promise<OptionType | any> => {
        try {
            const result = await axios.get('https://esteticabio.w3erp.com.br/w3erp/pub/WS?hash=12345&&chave=categoria')
            const response = result.data

            parseString(response, { trim: true }, (err: any, result: any) => {
                if (err) {
                    alert(err)
                } else {
                    setCategoria(result.resposta.resultado.categoria)
                }
            })
        } catch (error) {
            alert(error)
            console.log('estamos no catch');
        }
    }

    useEffect(() => {
        fetchCategoria()
    }, [])

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

    const handleChangeProfissao = (selected: OptionType | null) => {
        setSelectedOptionsProfissao(selected);

        const transformString = selected?.value.toString() !== undefined ? selected.value.toString() : '';

        setProfissao(transformString);
    }

    const handleChangeCategoria = (selected: OptionType | null) => {
        setSelectedOptionsCategoria(selected);

        const transformString = selected?.value.toString() !== undefined ? selected.value.toString() : '';

        setProfissao(transformString);
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
        complemento,
        setComplemento,
        setProfissao,
        setCategoria,
        profissao,
        categoria,
        obs,
        setObs,
        handleSubmitNext,
        handleSubmitBack,
        handleSubmitRegister,
        handlePessoaFisicaChange,
        handlePessoaJuridicaChange,
        handleInputChange,
        handleCepChange,
        cadastrar,
        handleChangeProfissao,
        handleChangeCategoria,
        selectedOptionsProfissao,
        selectedOptionsCategoria,
    }
}