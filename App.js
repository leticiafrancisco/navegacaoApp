import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './scr/Pages/HomePage';
import ContatoPage from './scr/Pages/ContatoPage';
import ConteudoPage from './scr/Pages/ConteudoPage';
import RedeSocialPage from './scr/Pages/RedeSocialPage';

const Rotas = createStackNavigator({

  Main: {
    screen: HomePage,
    navigationOptions: () => {
      return ({
        title: 'Home'
      })
    }
  },
  ContatoPage: {
    screen: ContatoPage,
    navigationOptions: () => {
      return ({
        title: 'Contatos',

      })
    }
  },

  ConteudoPage: {
    screen: ConteudoPage,
    navigationOptions: () => {
      return ({
        title: 'Contéudo',
      })
    }

  },

  RedeSocialPage: {
    screen: RedeSocialPage,
    navigationOptions: () => {
      return ({
        title: 'Rede Social'
      })
    }
  }

}, {

  defaultNavigationOptions: {

    headerStyle: {
      backgroundColor: '#FF1493',
      borderBottomWidth: 5,
      borderBottomColor: '#cccc'

    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    }

  }
})


const AppContainer = createAppContainer(Rotas)

export default AppContainer
