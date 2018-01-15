const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: ''
}

export default (state = INITIAL_STATE, action) => {


  if(action.type == 'modifica_email')
  {
    return { ...state, email: action.payload }
  }
  if(action.type == 'modifica_senha'){
    return {
      ...state, senha: action.payload
    }
  }

  if(action.type == 'modifica_nome'){
    return{
      ...state, nome: action.payload
    }
  }

  // switch (action.type) {
  //   case 'modifica_email':
  //     return {
  //       ...state,
  //       email: action.payload
  //     }
  //   break;
  //
  //   case 'modifica_senha':
  //     return {
  //       ...state, senha: action.payload
  //     }
  //   break;
  //
  //   case 'modifica_nome':
  //     return{
  //       ...state, nome: action.payload
  //     }
  //   break;
  //   default:
  //
  // }

console.log(action);
  return state
}
