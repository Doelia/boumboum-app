import {Image, Text, TouchableOpacity} from "react-native";
import {COLORS} from "../styles";
import {IMAGES} from "../assets";

export default function CustomButton({disabled, title, icon, onPress, style}) {

    const _style = {

        ...style,

        position: 'relative',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

        width: '100%',
        maxWidth: 400,
        padding: 16,
        borderRadius: 10,

        backgroundColor: disabled ? '#000000' : COLORS.DARK_BLUE,
        opacity: disabled ? .5 : 1
    }

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={_style}>
            <Image source={IMAGES.commons.blur_256_red} style={{width: 130, height: 130, position: 'absolute', left: 20, top: -75}}/>
            <Image source={IMAGES.commons.blur_256_blue} style={{width: 130, height: 130, position: 'absolute', right: 20, bottom: -75}}/>
            {icon && <Image source={icon} style={{width: 20, height: 20, marginEnd: 5}}/>}
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>{title}</Text>
        </TouchableOpacity>
    )

}
