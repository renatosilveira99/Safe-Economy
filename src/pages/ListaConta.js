import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Button, Card, ListItem } from 'react-native-elements';
import styles from '../styles/Conta';
import api from '../../api';

state = { id: '', saldo: '', email: ''}

export default class ListaConta extends Component {
  constructor(){
  super();
  this.state = {
    c: [],
  }
}
 
  static navigationOptions = {
    header: null,
  };

  async componentDidMount(){
    const { navigation } = this.props;
    const emailLogado = JSON.stringify(navigation.getParam('email', 'sem email')); 
    const response = await api.get('/usuarios');
    var dados = response.data;
    for (let i = 0; i < dados.length; i++) {
      const element = dados[i].email;
      element = '"'+ element + '"';
      if(element === emailLogado){ 
        this.setState({ id: dados[i].id, saldo: dados[i].saldo, email: dados[i].email})
      }
    }
    const contas = await api.get(`/retornaContas/${this.state.id}`);
    this.setState({ c: contas.data}) 
    
}



  render() {
    return ( 
      
      <View>
      {
        this.state.c.map((l, i) => (
          <ListItem
            key={i}
            title={l.nome}
            bottomDivider
            onPress={() => this.props.navigation.navigate({ routeName: 'PagaConta', params: {
              nome:l.nome,
              validade: l.validade,
              codBarras: l.codBarras,
              valor: l.valor,
              id: l.id,
              saldo: this.state.saldo,
              email: this.state.email,
            } })}
          />
        ))
      }
    </View>
    ); 
  }
}
