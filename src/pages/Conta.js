import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import styles from '../styles/Conta';
import api from '../../api';

export default class Conta extends Component {
  static navigationOptions = {
    header: null,
  };

  state = { nome: '', validade: '', codBarras: '', valor: '' };

  handleNomeChange = (nome) => {
    this.setState({ nome });
  };
  
  handleValidadeChange = (validade) => {
    this.setState({ validade });
  };

  handlecodBarrasChange = (codBarras) => {
    this.setState({ codBarras });
  };

  handleValorChange = (valor) => {
    this.setState({ valor });
  };

  handleCadastrarContaPress = async () => {
    try {
      const response = await api.post('/contas', {
        nome: this.state.nome,
        validade: this.state.validade,
        codBarras: this.state.codBarras,
        valor: this.state.valor
      });
      Alert.alert("ok", "Conta criada com sucesso");
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    return ( 
      <View style={styles.view}>  
        <Card containerStyle={styles.input}> 
        <Input 
            placeholder='Nome' 
            value={this.state.nome}
            onChangeText={this.handleNomeChange}
        />
        </Card>
        <Card containerStyle={styles.input}> 
        <Input 
            placeholder='Data de Validade' 
            value={this.state.validade}
            onChangeText={this.handleValidadeChange}
        />
        </Card>
        <Card containerStyle={styles.input}> 
        <Input 
            placeholder='Código de barras' 
            value={this.state.codBarras}
            onChangeText={this.handlecodBarrasChange}
        />
        </Card>
        <Card containerStyle={styles.input}> 
        <Input 
            placeholder='Valor' 
            value={this.state.valor}
            onChangeText={this.handleValorChange}
        />
        </Card>

        <Button 
            title='Adicionar Nova Conta' 
            titleStyle={{fontSize: 20}} 
            buttonStyle={styles.button}
            onPress={this.handleCadastrarContaPress}
        />
      </View>
    ); 
  }
}
