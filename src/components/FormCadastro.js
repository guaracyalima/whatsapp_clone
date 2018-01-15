import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet, Image } from 'react-native'

import { connect } from 'react-redux'

import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoActions'

  // const formCadastro = props => {
  //   console.log(props)
  //   return (
  //     <Image style={ css.imgBg } source={ require('../../assets/bg.png')}>
  //       <View style={ css.main }>
  //         <View style={ css.secondaryView }>
  //           <TextInput
  //                     placeholder='nome'
  //                     placeholderTextColor='#fff'
  //                     style={ css.input }
  //                     value={ props.nome }
  //                     onChangeText={ ( nome ) => props.modificaNome( nome )}/>
  //
  //           <TextInput
  //                     placeholder='E-mail'
  //                     placeholderTextColor='#fff'
  //                     style={ css.input }
  //                     value={ props.email }
  //                     onChangeText={ ( email ) => props.modificaEmail( email ) }/>
  //
  //           <TextInput
  //                     placeholder='Senha'
  //                     placeholderTextColor='#fff'
  //                     style={ css.input }
  //                     value={ props.senha }
  //                     secureTextEntry={ true }
  //                     onChangeText={ ( senha ) => props.modificaSenha( senha )}/>
  //         </View>
  //
  //         <View style={ css.otherView }>
  //           <Button title='Cadastrar' onPress={ () => false} style={ css.button }/>
  //         </View>
  //       </View>
  //   </Image>
  // )}

  class formCadastro extends Component{

    //funcao interna do objeto
    _cadastraUsuario(){
      const { nome, email, senha } = this.props
      // const nome = this.props.nome
      // const email = this.props.email
      // const senha = this.props.senha

      //chama a action creator
      this.props.cadastraUsuario({nome: nome, email: email, senha: senha})
    }

    render(){
      return(
           <Image style={ css.imgBg } source={ require('../../assets/bg.png')}>
             <View style={ css.main }>
               <View style={ css.secondaryView }>
                 <TextInput
                           placeholder='nome'
                           placeholderTextColor='#fff'
                           style={ css.input }
                           value={ this.props.nome }
                           onChangeText={ ( nome ) => this.props.modificaNome( nome )}/>

                 <TextInput
                           placeholder='E-mail'
                           placeholderTextColor='#fff'
                           style={ css.input }
                           value={ this.props.email }
                           onChangeText={ ( email ) => this.props.modificaEmail( email ) }/>

                 <TextInput
                           placeholder='Senha'
                           placeholderTextColor='#fff'
                           style={ css.input }
                           value={ this.props.senha }
                           secureTextEntry={ true }
                           onChangeText={ ( senha ) => this.props.modificaSenha( senha )}/>
               </View>

               <View style={ css.otherView }>
                 <Button title='Cadastrar' onPress={ () => this._cadastraUsuario() } style={ css.button }/>
               </View>
             </View>
         </Image>

      )
    }
  }

const mapStateToProps = state => {
  console.log(state)
  return (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)}

const css = StyleSheet.create({
  imgBg: {
    flex: 1,
    width: null
  },
  main: {
    flex: 1,
    padding: 10
  },
  secondaryView: {
    flex: 4, justifyContent: 'center'
  },
  otherView: {
    // flex: 1,
    backgroundColor: '#115e54'
  },
  input: {
    fontSize: 20,
    height: 45,
    color: '#fff'
  },
  button: {
    color: '#fff'
  }
})


export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
  }
)( formCadastro )
