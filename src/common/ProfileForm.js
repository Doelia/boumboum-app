import {Text, TextInput, View} from "react-native";
import {STYLES} from "../styles";
import {useState} from "react";

export default function ProfileForm() {

    const [fullName, setFullName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <View style={{gap: 20}}>
            <View>
                <Text style={{...STYLES.P}}>Full name</Text>
                <TextInput style={{...STYLES.INPUT_TEXT}} onChangeText={setFullName} value={fullName} />
            </View>

            <View>
                <Text style={{...STYLES.P}}>Date of birth</Text>
            </View>

            <View>
                <Text style={STYLES.P}>Brief description</Text>
                <TextInput style={{...STYLES.INPUT_TEXT}} onChangeText={setDescription} value={description} />
            </View>
        </View>
    )

}
