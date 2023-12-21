import { useEffect, useRef } from 'react'
import { Animated, Image, TouchableOpacity, View } from 'react-native'

import { IMAGES } from '../../../assets'
import { COLORS } from '../../../styles'

export default function RegistrationNavigation({ onPressBack, progress }) {
  const disabled = progress === 0

  const progressAnimated = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progressAnimated, {
      toValue: progress,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [progress])

  const width = progressAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '100%'],
  })

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={onPressBack}
        disabled={disabled}
        style={{ opacity: disabled ? 0.3 : 1 }}
      >
        <Image
          source={IMAGES.icons.icon_back}
          style={{ width: 100 / 2, height: 100 / 2, margin: -5 }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 130, height: 5, backgroundColor: '#c4c4c4', borderRadius: 100 }}>
          <Animated.View
            style={{
              width,
              height: '100%',
              position: 'absolute',
              backgroundColor: COLORS.DARK_BLUE,
              borderRadius: 100,
            }}
          />
        </View>
      </View>
      <View style={{ width: 50 }} />
    </View>
  )
}
