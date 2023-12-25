import { useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'

export default function CarouselSteps({ items, idxItemActive }) {
  return (
    <View style={{ gap: 3, flexDirection: 'row' }}>
      {items.map((item) => (
        <ProgressionItem key={item.idx} isActive={item.idx === idxItemActive} />
      ))}
    </View>
  )
}

function ProgressionItem({ isActive }) {
  const widthAnim = useRef(new Animated.Value(8)).current

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: isActive ? 16 : 8,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [isActive])

  return (
    <Animated.View
      style={{ height: 8, width: widthAnim, borderRadius: 20, backgroundColor: '#d7d7d7' }}
    />
  )
}
