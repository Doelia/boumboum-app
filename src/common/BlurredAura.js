import { Image, View } from 'react-native'

import { IMAGES } from '../assets'

export function BlurredAura({ color, position }) {
  const image = color === 'blue' ? IMAGES.commons.blur_1024_blue : IMAGES.commons.blur_1024_red

  let stylePosition = {}

  if (position === 'top-left') {
    stylePosition = {
      top: -512,
      left: -512,
    }
  }
  if (position === 'bottom-right') {
    stylePosition = {
      bottom: -512,
      right: -512,
    }
  }

  return (
    <View style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'absolute' }}>
      <Image
        source={image}
        style={{ width: 1024, height: 1024, ...stylePosition, position: 'absolute' }}
      />
    </View>
  )
}
