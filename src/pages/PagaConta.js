import React, { Component } from 'react'
import { Text, View, Alert} from 'react-native'
import { Input, Button, Card, Divider } from 'react-native-elements';
import styles from '../styles/Main';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import api from '../../api';


export default class PagaConta extends Component {
  constructor(props) {
    super(props);
    this.calcular = this.calcular.bind(this)
    this.state = {
      username: '',
      email: '',
      password: '',
      saldo: '',
      novoSaldo: '',
      res: ''
    };
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
        this.setState({ username: dados[i].username})
        this.setState({ email: dados[i].email})
        this.setState({ password: dados[i].password})
        this.setState({ saldo: dados[i].saldo})
      }
    }
    
}

  async calcular(){
      const { navigation } = this.props;
      const valor = JSON.stringify(navigation.getParam('valor', 'valor')); 
      let soma = parseFloat(this.state.saldo) - parseFloat(valor)
      this.setState({ saldo: soma});
       await api.patch(`/atualizaSaldo/${this.state.email}`, {
        saldo: soma,
        });
        const id = JSON.stringify(navigation.getParam('id', 'id')); 
        Alert.alert("Conta paga com sucesso")
        await api.delete(`/contas/${id}`)
        this.props.navigation.navigate('Tab');
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Card containerStyle={{height: hp('80%'), width: wp('90%'), justifyContent: 'space-between', backgroundColor: '#F5F5F5' }}>
    <Text style={{fontSize: 30}}>Nome: {JSON.stringify(navigation.getParam('nome', 'nome')) }</Text>
          <Divider/ > 
          <Text style={{fontSize: 30, marginVertical: 60}}>Data de Validade: {JSON.stringify(navigation.getParam('validade', 'validade'))}</Text>
          <Divider/ >          
          <Text style={{fontSize: 30, marginVertical: 60}}>Código de barras: {JSON.stringify(navigation.getParam('codBarras', 'codBarras'))}</Text>
          <Divider/ >          
          <Text style={{fontSize: 30}}>Valor: R$ {JSON.stringify(navigation.getParam('valor', 'valor'))} </Text>
   
        </Card>

        <Button 
            title='Pagar Conta' 
            titleStyle={{fontSize: 20}} 
            onPress={this.calcular}
            buttonStyle={{ backgroundColor: '#32CD32', width: wp('90%'), height: hp('7%'), marginTop: hp('2%'),}}
        />
        <Button title='Cancelar' titleStyle={{fontSize: 20}} 
          buttonStyle={{ backgroundColor: 'red', width: wp('90%'), height: hp('7%'), marginTop: hp('2%'),}}
          onPress={() => this.props.navigation.navigate('Tab')}
        />
      </View>
    );
  }
}

