import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/pages/Login';
import MainScreen from './src/pages/Main';
import CadastroScreen from './src/pages/Cadastro';
import ContaScreen from './src/pages/Conta';
import ListaContaScreen from './src/pages/ListaConta';
import PagaContaScreen from './src/pages/PagaConta';
import TabScreen from './src/pages/Tab';

const AppNavigator = createStackNavigator({
  Login: {
   screen: LoginScreen,
   navigationOptions: {
     header: null, 
   },
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  Cadastro: {
    screen: CadastroScreen,
  },
  Conta: ContaScreen,
  ListaConta: ListaContaScreen,
  PagaConta: PagaContaScreen,
  Tab: TabScreen,
}, 
  

{
  initialRouteName: 'Login',
}
);

export default createAppContainer(AppNavigator);
