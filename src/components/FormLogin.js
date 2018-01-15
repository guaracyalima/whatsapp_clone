import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { modificaEmail } from '../actions/AutenticacaoActions'
import { modificaSenha } from '../actions/AutenticacaoActions'

//mapStateToProps
//se cria as propriedades para o componente fora dele
const formLogin =  props => {
console.log( 'shwoing props ', props )
  return (
    <Image style={ css.imgBg } source={ require('../../assets/bg.png')}>
      <View style={ css.main }>

        <View style={ css.title }>
            <Text style={ css.titleText }>Valtizapi Clone</Text>
        </View>

        <View style={ css.login }>
          <TextInput
                    placeholder='E-mail'
                    placeholderTextColor='#fff'
                    style={ css.input }
                    value={ props.email }
                    onChangeText={
                      texto => props.modificaEmail( texto )
                    }/>

          <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#fff'
                    style={ css.input }
                    value={ props.senha }
                    secureTextEntry={ true }
                    onChangeText={ texto => props.modificaSenha( texto )}/>

          <TouchableHighlight onPress={ () => Actions.formCadastro() }>
            <Text style={ css.sigin }>Ainda nao tem cadastro> Cadastre-se</Text>
          </TouchableHighlight>
        </View>

        <View style={ css.buttons }>
          <View style={ css.buttonView }>
            <Button title='acessar' onPress={ () => false } />
          </View>
        </View>

      </View>
  </Image>
)
}

//cria as propriedades pro componente
const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha })( formLogin )

const css = StyleSheet.create({
  imgBg: {
    flex: 1,
    width: null
  },
  main: {
    flex: 1,
    marginTop: 60
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  titleText: {
    fontSize: 25,
    backgroundColor: 'transparent',
    color: '#fff'
  },
  login: {
    flex: 2
  },
  input: {
    fontSize: 20,
    height: 45,
    color: '#fff'
  },
  sigin: {
    fontSize: 20,
    color: '#fff'
  },
  buttons: {
    flex: 2
  },
  buttonView: {
    backgroundColor: '#115e54'
  }
})
