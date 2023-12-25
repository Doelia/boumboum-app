import { Text, View } from 'react-native'

import CustomButton from '../../../common/CustomButton'
import ProfileForm from '../../../common/ProfileForm'
import { CONTENT_PADDING, STYLES } from '../../../styles'

export default function Profile({ navigation }) {
  function btnNext() {
    navigation.navigate('FavoriteSongs')
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: CONTENT_PADDING, paddingVertical: 15 }}>
        <View>
          <Text style={{ ...STYLES.P, marginBottom: 10 }}>Step 2 of 3</Text>
          <Text style={{ ...STYLES.H2 }}>Tell us more about you</Text>
        </View>
      </View>

      <View style={{ flex: 1, padding: CONTENT_PADDING }}>
        <ProfileForm />
      </View>

      <View style={{ alignItems: 'center', paddingHorizontal: CONTENT_PADDING }}>
        <CustomButton title="Next step" onPress={btnNext} />
      </View>
    </View>
  )
}
