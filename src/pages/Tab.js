import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Main from './Main';
import Conta from './Conta';
import ListaConta from './ListaConta';
export default class TabsExample extends Component {

  static navigationOptions = {
    header: null,
  };
  

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Tabs tabContainerStyle={{ backgroundColor: '#32CD32' }}>
          <Tab heading="Saldo">
            <Main navigation={navigation}/>
          </Tab>
          <Tab heading="Conta">
            <Conta navigation={navigation}/>
          </Tab>
          <Tab heading="Lista de contas">
            <ListaConta navigation={navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}