import CustomButton from "../common/CustomButton";
import {Animated, Text, View} from "react-native";
import {CONTENT_PADDING, STYLES} from "../styles";
import {IMAGES} from "../assets";
import CustomSafeArea from "../common/CustomSafeArea";
import {useEffect, useRef} from "react";

export default function LoggedSuccess({navigation}) {

    const logoAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(logoAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, [logoAnim]);

    const translateY = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
    });

    const scale = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.2, 1],
    });

    function btnContinue() {
        navigation.replace('Registration');
    }

    return (
        <CustomSafeArea style={{flex: 1, justifyContent: 'space-between'}}>

            <View style={{alignItems: 'center', flex: 1, justifyContent: 'flex-start'}}>
                <View height={20}></View>
                <Animated.Image source={IMAGES.logos.logo_1} style={{width: 178, height: 49, transform: [{translateY}], opacity: logoAnim}}/>
            </View>

            <View style={{alignItems: 'center', padding: 50, flex: 1, justifyContent: 'center'}}>
                <Animated.Image source={IMAGES.loggedsuccess.check} style={{width: 442 / 2, height: 442 / 2, transform: [{scale}]}}/>
                <Text style={{textAlign: 'center', ...STYLES.H2}}>Logged in successfully!</Text>
                <Text style={{textAlign: 'center', marginTop: 10, ...STYLES.P}}>
                    You have been logged in successfully. Please enter the your details to complete your profile
                </Text>
            </View>
            <View style={{alignItems: 'center', paddingHorizontal: CONTENT_PADDING, flex: 1, justifyContent: 'flex-end'}}>

                <CustomButton title="Continue" onPress={btnContinue}/>
            </View>

        </CustomSafeArea>
    );
}
