import { atualizausuario, criarusuario, visualizarusuario } from "../models/usuarioModel.js"

export const createUsuario = async (req, res) => {
    console.log("usuarioControler ::createUsuario ")
    const {nome, email, senha, tipo } = req.body

    try {
        const [status, resposta] = await criarusuario(nome, email, senha, tipo);
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error);
        return res.status(500).json({mensagem: "erro ao criar usuario"})
    }
}
export const readUsuario = async (req, res) => {
    console.log("usuarioControler :: readUsuario")
    try {
        const [status, resposta] = await visualizarusuario()
        return res.status(status).json(resposta)
    } catch (error) {
         console.error(error);
        return res.status(500).json({mensagem: "erro ao criar usuario"})
    }
}
export const updateUsuario = async (req, res) => {
    console.log("usuarioControler :: updateUsuario")
    const {nome, email, senha} = req.body
    const {id_usuarios} = req.params
    try {
        const [status, resposta] = await atualizausuario (nome, email, senha, id_usuarios)

        return res.status(status).json(resposta)
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({mensagem: "erro ao criar usuario"})   
        
    }
}
export const deleteUsuario = async (req, res) => {
        console.log("usuarioControler :: deleteUsuario ")
        const {id_usuarios} = req.params
        try {
            const [status, resposta] = await deleteUsuario (id_usuarios)
            return res.status(status).json(resposta)
        } catch (error) {
        console.error(error);
        return res.status(500).json({mensagem: "erro ao criar usuario"})
        }

}