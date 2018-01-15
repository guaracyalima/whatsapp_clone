import firebase from 'firebase'

//toda actions deve ter um type
export const modificaEmail = (texto) => {
  console.log(texto)
  return{
    type: 'modifica_email',
    payload: texto
  }
}

export const modificaSenha = ( texto ) => {
  return {
    type: 'modifica_senha',
    payload: texto
  }
}

export const modificaNome = ( texto ) => {
  return {
    type: 'modifica_nome',
    payload: texto
  }
}

export const cadastraUsuario = ({nome: nome, email: email, senha: senha}) => {
          firebase.auth()
                  .createUserWithEmailAndPassword(email, senha)
                  .then( user => cadastroUsuarioSucesso() )
                  .catch( erro => cadastroUsuarioErro() )
  return {
    type: 'teste'
  }
}

const cadastroUsuarioSucesso = () => {
  return {
    type: 'sucesso'
  }
}

const cadastroUsuarioErro = () => {
  return {
    type: 'erro'
  }
}
