import React, { Component } from 'react'
import { Text, View, Alert} from 'react-native'
import { Input, Button, Card, Divider } from 'react-native-elements';
import styles from '../styles/Main';
import api from '../../api';



export default class Main extends Component {
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
  try {
    let soma = parseFloat(this.state.saldo) + parseFloat(this.state.novoSaldo)
    this.setState({ saldo: soma});
     await api.patch(`/atualizaSaldo/${this.state.email}`, {
      saldo: soma,
      }); 
    Alert.alert("Saldo Atualizado com sucesso!")
  } catch (error) {
    console.warn(error);
  }
}

  render() {
    return (
      <View style={styles.view}>
        <Text style={{fontSize: 40, alignSelf: 'center'}}> Bem-Vindo </Text>
        <Text style={{fontSize: 40, alignSelf: 'center'}}>  {this.state.username}</Text>
        <Card containerStyle={styles.card}>
          <Text style={{fontSize: 32, alignSelf: 'flex-start'}}>Saldo Atual</Text> 
          <Divider />
          <Text style={{fontSize: 30, alignSelf: 'center', color: 'blue', marginTop: 20}}>R$ {this.state.saldo}</Text>
        </Card>

        <Card containerStyle={styles.card}>
        <Input 
            placeholder='Insira saldo' 
            onChangeText={(novoSaldo) =>{this.setState({novoSaldo})}}
        />
        <Button title='Adicionar' titleStyle={{fontSize: 20}} buttonStyle={styles.button} onPress={this.calcular}/>
        </Card>
      </View>
    )
  }
}
