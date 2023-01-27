import axios from "axios"


class ServicoService{
    
    async cadastrar(data){
        return axios({
            url: "http://192.168.1.5:3000/usuario/cadastrar",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json',
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const servicoService = new ServicoService()
export default servicoService