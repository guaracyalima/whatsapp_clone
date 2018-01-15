import { combineReducers } from 'redux'

//reducers
import AutenticacaoReducer from './AutenticacaoReducer'
//o estado a esquerda recebe a funcao a direita

export default combineReducers(
  {
    AutenticacaoReducer: AutenticacaoReducer
  }
)
