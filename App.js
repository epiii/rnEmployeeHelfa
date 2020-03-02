import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
import { MainProvider } from './src/providers/MainProvider';
import Routes from './components/Routes';

const App = () => {
  return (
    <MainProvider>
      <Routes />
    </MainProvider>
  )
}

export default App;