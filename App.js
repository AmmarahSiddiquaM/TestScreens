import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Cancelled from './components/Cancelled'
import Feedback from './components/Feedback'

const App = () => {
  return (
    <>
    <View>
      <Feedback/>
      {/*<Cancelled/>*/}
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
