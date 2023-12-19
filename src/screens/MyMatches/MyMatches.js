import CustomSafeArea from "../../common/CustomSafeArea";
import {CONTENT_PADDING, STYLES} from "../../styles";
import {Text, TouchableOpacity, View} from "react-native";

export default function MyMatches({onBack}) {

    return (
        <CustomSafeArea style={{}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: CONTENT_PADDING }}>
                <Text style={STYLES.H3}>Matches</Text>
                <TouchableOpacity onPress={onBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={{height: 20}}/>

        </CustomSafeArea>
    )

}
