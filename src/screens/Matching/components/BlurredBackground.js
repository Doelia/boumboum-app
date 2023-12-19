import {Animated, Image, Platform, View} from "react-native";
import {P100} from "../../../styles";
import {useCallback, useEffect, useRef, useState} from "react";
import {BlurView} from "expo-blur";
import {BlurredAura} from "../../../common/BlurredAura";
import {useFocusEffect} from "@react-navigation/native";

export default function BlurredBackground({stackProfiles, currentIdBackground, setCurrentIdBackground}) {

    const [backgroundImages, setBackgroundImages] = useState([]);

    // When stackProfiles change, set currentIdBackground to the first song of the current profile
    useEffect(() => {
        if (stackProfiles.length > 0 && stackProfiles[0].songs.length > 0) {
            setCurrentIdBackground(stackProfiles[0].songs[0].title);
        } else {
            setCurrentIdBackground(null);
        }
    }, [stackProfiles])

    // When a new profile is loaded, add its cover images to the backgroundImages
    useEffect(() => {

        const images = stackProfiles.reduce((acc, profile) => [
            ...acc,
            ...profile.songs.map(song => ({id: song.title, image: song.image}))
        ], [])
            .filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)

        // add missing title images only
        setBackgroundImages([
            ...backgroundImages,
            ...images.filter(image => !backgroundImages.find(bgImage => bgImage.id === image.id))
        ]);

    }, [stackProfiles]);


    // Android blueview workaround
    const [showBlueView, setShowBlueView] = useState(Platform.OS !== 'android');
    useFocusEffect(
        useCallback(() => {
            if (Platform.OS === 'android') {
                setShowBlueView(false);
                setTimeout(() => {
                    setShowBlueView(true);
                }, 300);
            }
        }, [])
    );

    return (
        <>
            <BlurredAura color="red" position="top-left"/>
            <BlurredAura color="blue" position="bottom-right"/>
            <View style={{...P100, position: 'absolute', opacity: .75}}>
                {backgroundImages.map((image, idx) =>
                    <Item isActive={image.id === currentIdBackground} key={image.id} image={image.image}/>
                )}
            </View>
            {showBlueView && <BlurView intensity={50} style={{...P100, position: 'absolute'}} overlayColor="transparent"></BlurView>}
        </>
    )
}

function Item({image, isActive}) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: isActive ? 1 : 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [isActive]);

    return (
        <>
            <Animated.View style={{...P100, opacity: fadeAnim, position: 'absolute'}}>
                <Image source={image} style={{...P100, objectFit: 'cover'}}/>
            </Animated.View>
        </>
    )
}
