import {createNavigationContainerRef, NavigationContainer} from "@react-navigation/native";
import UploadAvatar from "./screens/UploadAvatar";
import Profile from "./screens/Profile";
import FavoriteSongs from "./screens/FavoriteSongs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomSafeArea from "../../common/CustomSafeArea";
import RegistrationNavigation from "./components/RegistrationNavigation";
import {CONTENT_PADDING} from "../../styles";
import {View} from "react-native";
import {useState} from "react";

const Stack = createNativeStackNavigator();

export default function Registration({navigation}) {

    const nestedNavigationRef = createNavigationContainerRef()

    const [step, setStep] = useState(0);

    function btnBack() {
        nestedNavigationRef.goBack();
    }

    return (
        <>
            <CustomSafeArea style={{flex: 1}}>

                <View style={{paddingHorizontal: CONTENT_PADDING, paddingVertical: 15}}>
                    <RegistrationNavigation onPressBack={btnBack} progress={step / 3}/>
                </View>

                <NavigationContainer independent={true} theme={{colors: {background: 'white'}}} ref={nestedNavigationRef}>

                    <Stack.Navigator screenOptions={{headerShown: false}} screenListeners={{
                        state: (e) => {
                            setStep(e.data.state.index);
                        },
                    }}>
                        <Stack.Screen name="UploadAvatar" component={UploadAvatar}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="FavoriteSongs">
                            {(props) => <FavoriteSongs rootNavigation={navigation}/>}
                        </Stack.Screen>
                    </Stack.Navigator>

                </NavigationContainer>

            </CustomSafeArea>
        </>
    );

}
