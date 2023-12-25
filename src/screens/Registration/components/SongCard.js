import { Image, Text, View } from 'react-native'

import { STYLES } from '../../../styles'

export default function SongCard({ song, icon }) {
  return (
    <View key={song.title} style={STYLES.SONG_CARD}>
      <View style={{ flex: 1, flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Image source={song.image} style={STYLES.SONG_CARD_IMAGE} />
        <View style={{ gap: 3 }}>
          <Text style={{ ...STYLES.FONT_SONGTITLE }}>{song.title}</Text>
          <Text style={{ ...STYLES.P }}>{song.artist}</Text>
        </View>
      </View>
      {icon()}
    </View>
  )
}
