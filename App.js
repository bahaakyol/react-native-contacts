import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import CallContact from './screens/CallContact'
import HomeScreen from './screens/HomeScreen'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

const Stack = createSharedElementStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={HomeScreen} />
        <Stack.Screen name="CallContact" component={CallContact} sharedElements = {(route)=> {
          return [route.params.login.uuid]
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App

