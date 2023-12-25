import { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'

import { IMAGES } from '../../../assets'
import { user_yohan } from '../../../mokes'
import { CENTER, CONTENT_PADDING, STYLES } from '../../../styles'
import MyMatches from '../../MyMatches/MyMatches'
import MyProfile from '../../MyProfile/MyProfile'

export default function MenuHeader() {
  const [modalMyProfileOpened, setModalMyProfileOpened] = useState(false)
  const [modalMyMatchesOpened, setModalMyMatchesOpened] = useState(false)

  function btnMyMatches() {
    setModalMyMatchesOpened(true)
  }

  function btnProfile() {
    setModalMyProfileOpened(true)
  }

  return (
    <>
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent={false}
        visible={modalMyProfileOpened}
        onRequestClose={() => {
          setModalMyProfileOpened(false)
        }}
      >
        <MyProfile onBack={() => setModalMyProfileOpened(false)} />
      </Modal>

      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent={false}
        visible={modalMyMatchesOpened}
        onRequestClose={() => {
          setModalMyMatchesOpened(false)
        }}
      >
        <MyMatches onBack={() => setModalMyMatchesOpened(false)} />
      </Modal>

      <View
        style={{
          paddingHorizontal: CONTENT_PADDING,
          paddingTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={btnProfile} style={menuButton}>
          <Image
            source={user_yohan.image}
            style={{ width: 48 / 2, height: 48 / 2, borderRadius: 10 }}
          />
          <Text style={STYLES.F13}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={btnMyMatches} style={menuButton}>
          <Text style={STYLES.F13}>Matches</Text>
          <Image source={IMAGES.icons.messages} style={{ width: 48 / 2, height: 48 / 2 }} />
        </TouchableOpacity>
      </View>
    </>
  )
}

const menuButton = {
  paddingVertical: 8,
  paddingHorizontal: 12,
  backgroundColor: 'white',
  borderRadius: 10,
  flexDirection: 'row',
  gap: 10,
  ...CENTER,
}
