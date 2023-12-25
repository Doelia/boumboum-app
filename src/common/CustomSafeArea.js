import { Platform, SafeAreaView, View } from 'react-native'

export default function CustomSafeArea({ style, children, onlyBottom = false, onlyTop = false }) {
  return (
    <SafeAreaView style={style}>
      {!onlyBottom && Platform.OS !== 'ios' && <View style={{ height: 20 }} />}
      {children}
      {!onlyTop && Platform.OS !== 'ios' && <View style={{ height: 20 }} />}
    </SafeAreaView>
  )
}
