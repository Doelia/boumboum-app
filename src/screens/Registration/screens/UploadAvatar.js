import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { IMAGES } from '../../../assets'
import CustomButton from '../../../common/CustomButton'
import { CENTER, COLORS, CONTENT_PADDING, P100, STYLES } from '../../../styles'

export default function UploadAvatar({ navigation }) {
  const [image, setImage] = useState()

  async function pick() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  function btnNext() {
    navigation.navigate('Profile')
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: CONTENT_PADDING, paddingVertical: 20 }}>
        <View>
          <Text style={{ ...STYLES.P, marginBottom: 10 }}>Step 1 of 3</Text>
          <Text style={{ ...STYLES.H2 }}>Upload profile picture</Text>
        </View>
      </View>

      <View style={{ flex: 1, ...CENTER }}>
        <TouchableOpacity onPress={pick} style={styles.circle}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#ececec',
              borderRadius: circleSize,
              margin: 8,
              overflow: 'hidden',
              ...CENTER,
            }}
          >
            {image && <Image source={{ uri: image }} style={{ ...P100, objectFit: 'cover' }} />}
            {!image && (
              <Image
                source={IMAGES.registration.icon_user}
                style={{ width: '40%', height: '40%', objectFit: 'cover' }}
              />
            )}
          </View>
          <Image source={IMAGES.registration.btn_edit} style={styles.image_btn_edit} />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', paddingHorizontal: CONTENT_PADDING }}>
        <CustomButton title="Next step" onPress={btnNext} />
      </View>
    </View>
  )
}

const circleSize = 200

const styles = {
  circle: {
    height: circleSize,
    width: circleSize,
    backgroundColor: 'white',
    borderRadius: 200,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: COLORS.PINK,
  },
  image_btn_edit: {
    width: 122 / 2,
    height: 122 / 2,
    position: 'absolute',
    left: circleSize / 2 - 122 / 4,
    bottom: -122 / 4,
  },
}
