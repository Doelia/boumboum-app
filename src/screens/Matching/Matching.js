import { useEffect, useState } from 'react'
import { Image, Modal, Platform, TouchableOpacity, View } from 'react-native'

import { ItsAMatch } from './ItsAMatch'
import BlurredBackground from './components/BlurredBackground'
import { Card } from './components/Card'
import MenuHeader from './components/MenuHeader'
import { IMAGES } from '../../assets'
import CustomSafeArea from '../../common/CustomSafeArea'
import useObserver from '../../hooks/useObserver'
import { songs, user_helena, user_isabella, user_jessica } from '../../mokes'
import { CENTER, P100 } from '../../styles'

export default function Matching() {
  const [stackProfiles, setStackProfiles] = useState([
    buildProfile({ user: user_jessica, songs: [songs[4], songs[1], songs[2]] }),
    buildProfile({ user: user_helena, songs: [songs[3], songs[0]] }),
    buildProfile({ user: user_isabella, songs: [songs[5], songs[3], songs[4]] }),
  ])

  const [currentIdBackground, setCurrentIdBackground] = useState(0)

  const onNextSubscriber = useObserver()

  // Delay the like button, time to animate the card and load/unload profiles
  const [isLoading, setIsLoading] = useState(false)

  // Its a match
  const [matchedUser, setMatchedUser] = useState(null)

  // On next(yes), call the api to like the profile and open ITsAMath modal if its a match
  useEffect(() => {
    if (stackProfiles.length === 0) return
    const cb = onNextSubscriber.current.subscribe((isYes) => {
      if (!isYes) return

      console.log('yes on ', stackProfiles[0].user.name)

      // TODO call the server

      // Its a match (simulation)
      setTimeout(() => {
        setMatchedUser(stackProfiles[0].user)
      }, 500)
    })
    return () => {
      onNextSubscriber.current.unsubscribe(cb)
    }
  }, [isLoading, stackProfiles])

  // On next, pop the stack: That will place the next profile at the front and play the animation
  useEffect(() => {
    const cb = onNextSubscriber.current.subscribe(() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setStackProfiles((stackProfiles) => [...stackProfiles.slice(1)])
      }, 400)
    })
    return () => {
      onNextSubscriber.current.unsubscribe(cb)
    }
  }, [])

  // On next, push a new profile in the stack
  useEffect(() => {
    const cb = onNextSubscriber.current.subscribe(() => {
      setStackProfiles((stackProfiles) => [
        ...stackProfiles,
        buildProfile({ user: user_jessica, songs }),
      ])
    })
    return () => {
      onNextSubscriber.current.unsubscribe(cb)
    }
  }, [])

  function btnYes() {
    if (isLoading) return
    onNextSubscriber.current.publish(true)
  }

  function btnNope() {
    if (isLoading) return
    onNextSubscriber.current.publish(false)
  }

  return (
    <>
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent={false}
        visible={matchedUser !== null}
        onRequestClose={() => {
          setMatchedUser(null)
        }}
      >
        {matchedUser !== null && (
          <ItsAMatch matchedUser={matchedUser} onClose={() => setMatchedUser(null)} />
        )}
      </Modal>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <CustomSafeArea onlyTop />

        <BlurredBackground
          stackProfiles={stackProfiles}
          currentIdBackground={currentIdBackground}
          setCurrentIdBackground={setCurrentIdBackground}
        />

        <MenuHeader />

        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, ...CENTER }}>
          <View style={{ ...P100, ...CENTER, maxWidth: 400, maxHeight: 600, alignItems: 'center' }}>
            {stackProfiles.map((profile, index) => (
              <Card
                setCurrentIdBackground={setCurrentIdBackground}
                index={index}
                key={profile.id}
                profile={profile}
                onNext={onNextSubscriber}
              />
            ))}
          </View>
        </View>

        <View style={{ ...CENTER }}>
          <Image source={IMAGES.matching.ellipse} style={styles.image_ellipse} />
          <View style={{ flexDirection: 'row', gap: 30, marginVertical: 20 }}>
            <TouchableOpacity style={styles.roundedButton} onPress={btnNope}>
              <Image source={IMAGES.matching.nope} style={{ width: 34 / 2, height: 34 / 2 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundedButton} onPress={btnYes}>
              <Image source={IMAGES.matching.yes} style={{ width: 53 / 2, height: 49 / 2 }} />
            </TouchableOpacity>
          </View>
          {Platform.OS === 'ios' && <View style={{ height: 20 }} />}
        </View>
      </View>
    </>
  )
}

function buildProfile({ user, songs }) {
  return {
    id: Math.random(),
    user,
    songs,
  }
}

const styles = {
  image_ellipse: {
    width: 390,
    height: 77,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : -20,
  },
  roundedButton: {
    ...CENTER,
    borderRadius: 100,
    width: 64,
    height: 64,
    backgroundColor: 'white',
    shadowColor: '#F2ADFF',
    shadowRadius: 20,
    shadowOpacity: 0.4,
    shadowOffset: { height: 20, width: 0 },
    elevation: 10,
  },
}
