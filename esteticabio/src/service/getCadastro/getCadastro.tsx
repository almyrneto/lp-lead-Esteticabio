import { apiService, } from "../config/apiService"


export const getCadastro = async (
    ACAO: string,
    contato: string,
    hash: string,
    email: string,
    observacao: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    uf: string,
    municipio: string,
    caixaPostal: string,
    telefone: string,
    cdTelefoneTipo: string,
    empresa: string,
): Promise<{ message: string } | undefined> => {
    try {
        const result = await apiService.get('pub/process/IntegracaoWebservice', {
            params: {
                ACAO,
                contato,
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
            },
        })
        if (result.status === 200) {
            return { message: 'sucesso' }
        }
    } catch (error) {
        return { message: 'algo de errado aconteceu' }
    }
}


