import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import { PermissionsAndroid } from 'react-native'
import Notifications from './screens/Notifications'
import BookDetails from './screens/BookDetails'
import AllBooks from './screens/AllBooks'
import PdfViewer from './screens/PdfReader'
import Pdf from 'react-native-pdf'

const Stack= createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
          <Stack.Screen  name='Home' component={Home}  />
          <Stack.Screen  name='Notifications' component={Notifications}  />
          <Stack.Screen  name='BookDetails' component={BookDetails}  />
          <Stack.Screen  name='AllBooks' component={AllBooks}  />
          <Stack.Screen  name='PdfReader' component={PdfViewer}  />
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})
