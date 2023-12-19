import CustomSafeArea from "../../common/CustomSafeArea";
import ProfileForm from "../../common/ProfileForm";
import {CONTENT_PADDING, STYLES} from "../../styles";
import {Button, Image, Platform, Text, TouchableOpacity, View} from "react-native";
import {user_yohan} from "../../mokes";
import {useNavigation} from "@react-navigation/native";

export default function MyProfile({onBack}) {

    const navigation = useNavigation();

    function btnReset() {
        onBack();
        navigation.navigate('Home');
    }

    return (
        <CustomSafeArea style={{}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: CONTENT_PADDING }}>
                <Text style={STYLES.H3}>Profile</Text>
                <TouchableOpacity onPress={onBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={{height: 20}}/>

            <View style={{alignItems: 'center', gap: 10}}>
                <Image source={user_yohan.image}
                       style={{width: 80, height: 80, objectFit: 'cover', borderRadius: 16}}></Image>
                <Text style={STYLES.F13}>Hey {user_yohan.name}</Text>
            </View>

            <View style={{height: 20}}/>

            <View style={{padding: CONTENT_PADDING}}>
                <ProfileForm/>
            </View>

            <View>
                { Platform.OS !== 'android' && <Button title={'Debug : Back to home'} onPress={btnReset}/> }
            </View>


        </CustomSafeArea>
    )

}
