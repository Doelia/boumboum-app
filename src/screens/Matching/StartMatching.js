import {Animated, Image, Text, View} from "react-native";
import {CENTER, CONTENT_PADDING, STYLES} from "../../styles";
import CustomButton from "../../common/CustomButton";
import {BlurredAura} from "../../common/BlurredAura";
import {IMAGES} from "../../assets";
import {useEffect, useRef} from "react";

export default function StartMatching({navigation}) {

    const inAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(inAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, [inAnim]);

    const translateY = inAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0],
    });

    function btnStart() {
        navigation.replace('MatchingScreen');
    }

    return (
        <View style={{flex: 1}}>
            <BlurredAura color="red" position="top-left"/>
            <BlurredAura color="blue" position="bottom-right"/>
            <View style={{flex: 1, padding: CONTENT_PADDING}}>
                <View style={{flex: 4, ...CENTER}}>
                    <Image source={IMAGES.logos.logo_2} style={{width: 287 / 2, height: 175 / 2, marginBottom: 50}}/>
                    <Animated.View style={{transform: [{translateY}]}}>
                        <Text style={{textAlign: 'center', ...STYLES.H1}}>Welcome music lover</Text>
                        <Text style={{textAlign: 'center', ...STYLES.P}}>Let’s try to find your music mate</Text>
                    </Animated.View>
                </View>
                <View style={{flex: 1}}></View>
                <View style={{alignItems: 'center'}}>
                    <CustomButton title={'Start matching'} onPress={btnStart}/>
                </View>
            </View>
        </View>
    )
}
