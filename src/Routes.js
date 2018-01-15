import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

//my modules
import FormLogin from './components/FormLogin'
import FormCadastro from './components/FormCadastro'

export default props => (
  <Router>
    <Scene key='formLogin' component={ FormLogin } title="Login" initil />
    <Scene key='formCadastro' component={ FormCadastro } title="Cadastro" />
  </Router>
)
