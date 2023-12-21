import { useEffect, useRef } from 'react'
import { Animated, Image, Text, View } from 'react-native'

import { IMAGES } from '../assets'
import { BlurredAura } from '../common/BlurredAura'
import CustomButton from '../common/CustomButton'
import CustomSafeArea from '../common/CustomSafeArea'
import { CONTENT_PADDING, P100, STYLES } from '../styles'

export default function Home({ navigation }) {
  function btnLogin() {
    navigation.replace('LoggedSuccess')
  }

  const fadeInAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [fadeInAnim])

  const translateYImage = fadeInAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  })

  const translateYText = fadeInAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  })

  const translateYButton = fadeInAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0],
  })

  const opacity = fadeInAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <CustomSafeArea onlyTop />

      <View style={{ flex: 4, position: 'relative', alignItems: 'center' }}>
        <Animated.Image
          source={IMAGES.home.main}
          style={{
            ...P100,
            resizeMode: 'contain',
            opacity,
            transform: [{ translateY: translateYImage }],
          }}
        />
      </View>

      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          opacity,
          transform: [{ translateY: translateYText }],
        }}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image
            source={IMAGES.home.white_gradiant}
            style={{ ...P100, aspectRatio: 1 / 2, position: 'absolute' }}
          />
          <Image
            source={IMAGES.logos.logo_1}
            style={{ width: 178, height: 49, marginTop: 50, marginBottom: 20 }}
          />
        </View>
        <View
          style={{ width: '100%', paddingHorizontal: CONTENT_PADDING, backgroundColor: 'white' }}
        >
          <Text style={{ ...STYLES.H1, textAlign: 'center' }}>
            Get ready for an incredible musical adventure!
          </Text>
        </View>
      </Animated.View>

      <BlurredAura color="red" position="top-left" />
      <BlurredAura color="red" position="bottom-right" />

      <View style={{ height: 20 }} />

      <Animated.View
        style={{
          marginHorizontal: CONTENT_PADDING,
          alignItems: 'center',
          opacity,
          transform: [{ translateY: translateYButton }],
        }}
      >
        <CustomButton
          title="Login with Spotify"
          icon={IMAGES.icons.icon_spotify}
          onPress={btnLogin}
        />
      </Animated.View>

      <CustomSafeArea onlyBottom />
    </View>
  )
}
