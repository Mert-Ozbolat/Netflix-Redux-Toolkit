import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { StackNavigation, TabBarNavigation } from './src/router/rootNavigation'
import { Provider } from 'react-redux'
import store from './src/store'



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App