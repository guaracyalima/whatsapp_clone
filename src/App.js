import React, { Component } from 'react'
import firebase from 'firebase'
import Routes from './Routes'
import ReduxThunk from 'redux-thunk'

//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

//reducers
import reducers from './reducers/'


export default class App extends Component{
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCq4ZxP4uom-IUA9TiCrx1rZaMcZ9Me6VY",
      authDomain: "valtizpi-crone.firebaseapp.com",
      databaseURL: "https://valtizpi-crone.firebaseio.com",
      projectId: "valtizpi-crone",
      storageBucket: "valtizpi-crone.appspot.com",
      messagingSenderId: "447557748530"
    };
    firebase.initializeApp(config);
  }
  //segundo parametro da createStore e o state inicial da applicacao
  //applicando o redux thunk vc pode tratar todas as actions
  //bom pra quando precisar aguardar algum tipo de processamento
  render(){
    return(
      <Provider store={ createStore ( reducers, {}, applyMiddleware( ReduxThunk ) )}>

         <Routes />
       </Provider>
    )
  }
}
