import express from 'express'
import { createUsuario, deleteUsuario, readUsuario, updateUsuario } from './controllers/usuarioController.js';

const PORT = 3000;
const app = express()

app.use(express.json());

app.get('/',(req,res) => {
    res.send('API Funcionando')
})

app.post('/usuarios', createUsuario);
app.get('/usuarios', readUsuario);
app.put('/usuarios/id_usuarios', updateUsuario);
app.delete('/usuarios/id_usuarios', deleteUsuario)



app.listen(PORT, () => {
    console.log(`API FUNCIONANDO NA PORTA ${PORT}`)
})