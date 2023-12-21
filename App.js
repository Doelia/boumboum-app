import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'

import Home from './src/screens/Home'
import LoggedSuccess from './src/screens/LoggedSuccess'
import Matching from './src/screens/Matching/Matching'
import StartMatching from './src/screens/Matching/StartMatching'
import Registration from './src/screens/Registration/Registration'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <NavigationContainer theme={{ colors: { background: 'white' } }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LoggedSuccess" component={LoggedSuccess} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="StartMatching" component={StartMatching} />
          <Stack.Screen name="MatchingScreen" component={Matching} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
