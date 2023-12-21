import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { View } from 'react-native'

import RegistrationNavigation from './components/RegistrationNavigation'
import FavoriteSongs from './screens/FavoriteSongs'
import Profile from './screens/Profile'
import UploadAvatar from './screens/UploadAvatar'
import CustomSafeArea from '../../common/CustomSafeArea'
import { CONTENT_PADDING } from '../../styles'

const Stack = createNativeStackNavigator()

export default function Registration({ navigation }) {
  const nestedNavigationRef = createNavigationContainerRef()

  const [step, setStep] = useState(0)

  function btnBack() {
    nestedNavigationRef.goBack()
  }

  return (
    <>
      <CustomSafeArea style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: CONTENT_PADDING, paddingVertical: 15 }}>
          <RegistrationNavigation onPressBack={btnBack} progress={step / 3} />
        </View>

        <NavigationContainer
          independent
          theme={{ colors: { background: 'white' } }}
          ref={nestedNavigationRef}
        >
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            screenListeners={{
              state: (e) => {
                setStep(e.data.state.index)
              },
            }}
          >
            <Stack.Screen name="UploadAvatar" component={UploadAvatar} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="FavoriteSongs">
              {(props) => <FavoriteSongs rootNavigation={navigation} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </CustomSafeArea>
    </>
  )
}
