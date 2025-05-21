import db from '../db.js'
import mysql from 'mysql2/promise'

const conexao = mysql.createPoolCluster(db);

export const criarusuario = async (nome, email, senha, tipo) => {
    console.log("usuarioModel :: criarusuario");
    const sql = `INSERT INTO usuarios (nome, email, senha, tipo) VALUES(?,?,?,?)`;
    const params = [nome, email, senha, tipo]
    try {
        const [reposta] = await conexao.query(sql, params)
        return [201,{mensagem: 'Usuario Criado com sucesso'}]
    } catch (error) {
        console.error({mensagem: "Erro ao Criar usuario",code:error.code,sql:error.sqlMensagem});
        return [500,{mensagem: "Erro ao Criar usuario", code:error.code,sql:error.sqlMensagem}]
    }
};

export const visualizarusuario = async () => {
    console.log("usuarioModel :: visualizarusuario");
    const sql = `SELECT * FROM usuarios`;
    
    try {
        const [reposta] = await conexao.query(sql)
    } catch (error) {
        console.error({mensagem: "Erro ao visualizar usuario",code:error.code,sql:error.sqlMensagem});
        return [500,{mensagem: "Erro ao visualizar usuario", code:error.code,sql:error.sqlMensagem}]
    }
};

export const atualizausuario = async (nome, email, senha, id_usuarios) => {
    console.log("usuarioModel :: atualizausuario");
    const sql = `UPDATE usuarios SET nome=?, email=?, senha=?,`;
    const params = [nome, email, senha, id_usuarios];
    try {
        const [reposta] = await conexao.query(sql, params)

        if (reposta.affectedRows < 1){
            return [404, {mensagem: "Usuario não encontrado"}];
        }
        return [200,{mensagem: "Usuario Atualizado"}]
    } catch (error) {
        console.error({mensagem: "Erro ao atualizar usuario",code:error.code,sql:error.sqlMensagem});
        return [500,{mensagem: "Erro ao atualizar usuario", code:error.code,sql:error.sqlMensagem}]
    }
};

export const deletarusuario = async (id_usuarios) => {
    console.log("usuarioModel :: deletarusuario");
    const sql = `DELETE FROM usuario WHERE id_usuarios`;
    const params = [id_usuarios]
    try {
        const [reposta] = await conexao.query(sql, params);

        if (reposta.affectedRows < 1 ){
            return [404,{mensagem:"Usuario não encotrado"}];
        }
        return [200,{mensagem:"Usuario deletado!"}]
        
    } catch (error) {
        console.error({mensagem: "Erro ao deletar usuario",code:error.code,sql:error.sqlMensagem});
        return [500,{mensagem: "Erro ao deletar usuario", code:error.code,sql:error.sqlMensagem}]
    }
};
