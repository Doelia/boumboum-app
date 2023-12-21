import { useEffect, useRef } from 'react'
import { Animated, Image, Text, View } from 'react-native'

import { P100, STYLES } from '../../../styles'

export default function CardHeader({ user, sayOnlyHello }) {
  const height = 60

  const translateY = useRef(new Animated.Value(-0)).current

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: sayOnlyHello ? 0 : -height,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [sayOnlyHello])

  return (
    <View style={{ height, overflow: 'hidden' }}>
      <Animated.View style={{ alignItems: 'center', transform: [{ translateY }] }}>
        <View style={{ height, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={STYLES.F15}>Say hello to...</Text>
        </View>
        <View
          style={{ alignItems: 'center', height, justifyContent: 'center', overflow: 'hidden' }}
        >
          <View style={{ height: 40, width: 40, borderRadius: 10, marginBottom: 5 }}>
            <Image source={user.image} style={{ ...P100, borderRadius: 1000 }} />
          </View>
          <Text style={STYLES.F13}>{user.name}</Text>
        </View>
      </Animated.View>
    </View>
  )
}
