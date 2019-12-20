//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Button, Input } from 'react-native-elements';
import {Content, Form, Item, Label } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';
import api from '../../api';
import {
  FieldsContainer,
  Fieldset
} from 'react-native-clean-form';

// create a component
class Cadastro extends Component {

  static navigationOptions = {
    header:null,
  };

  state = { username: '', email: '', password: '', saldo: ''};
  
  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handleSaldoChange = (saldo) => {
    this.setState({ saldo });
  };
  
  handlePasswordChange = (password) => {
    this.setState({ password });
  };


  handleSignUpPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0 || this.state.saldo.length === 0 || this.state.username.length === 0) {
      Alert.alert('Erro', 'Preencha todos os campos para continuar!')
      this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
    } else {
      try {
        await api.post('/register', {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          saldo: this.state.saldo
        });

        this.setState({ success: 'Conta criada com sucesso! Redirecionando para o login', error: '' });
        Alert.alert('Prontinho', 'Conta criada com sucesso! Redirecionando para o login');
        setTimeout(this.goToLogin, 2500);
      } catch (_err) {
        console.warn(_err);
        Alert.alert('Erro', 'Houve um problema com o cadastro, verifique os dados preenchidos!')
        this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
      }
    }
  };

  goToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }





  render() {
    return (
      <View style={styles.container}>
        <Content>
          <Form>
          <FieldsContainer>
      <Fieldset label="Informações Pessoais">
        <Item stackedLabel>
          <Label>Nome</Label>
          <Input containerStyle={{width: 350}} autoCorrect={false} placeholder="ex: Fulano" onChangeText={this.handleUsernameChange} />
        </Item>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input autoCorrect={false} placeholder="ex: teste@teste.com" onChangeText={this.handleEmailChange} />
        </Item>
        <Item stackedLabel>
          <Label>Saldo Atual</Label>
          <Input autoCorrect={false} placeholder="ex: 15.60" onChangeText={this.handleSaldoChange} />
        </Item>
        </Fieldset>
        </FieldsContainer>
      <FieldsContainer>
      <Fieldset label="Senha" last>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input secureTextEntry={true} placeholder="" onChangeText={this.handlePasswordChange} />
        </Item>
      </Fieldset>
    </FieldsContainer>
          <Button buttonStyle={{backgroundColor: '#32CD32'}} title='Cadastrar' onPress={this.handleSignUpPress} />
          </Form>
        </Content>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Cadastro;
