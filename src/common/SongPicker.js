import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {CENTER, COLORS, CONTENT_PADDING, STYLES} from "../styles";
import {useState} from "react";
import {songs} from "../mokes";
import {IMAGES} from "../assets";
import CustomSafeArea from "./CustomSafeArea";
import SongCard from "../screens/Registration/components/SongCard";

export default function SongPicker({onBack, mySongs, setMySongs}) {

    const allSongs = songs.filter(song => !mySongs.find(mySong => mySong.title === song.title));

    function cancel() {
        onBack();
    }

    function pick(song) {
        setMySongs(old => [...old, song]);
        onBack();
    }

    const [search, setSearch] = useState('');

    return (
        <CustomSafeArea style={{flex: 1}}>
            <View style={{flex: 1, paddingHorizontal: CONTENT_PADDING}}>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, gap: 20}}>
                    <View style={{ flex: 1, borderColor: COLORS.BORDER, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput placeholderTextColor={COLORS.LIGHT_GRAY} autoFocus={true} placeholder={'Search...'}
                                   value={search} onChangeText={setSearch}
                                   style={{...STYLES.FONT_INPUT, flex: 1, paddingVertical: 10}}
                        />
                    </View>
                    <TouchableOpacity onPress={cancel}>
                        <Text style={STYLES.P}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                {search !== '' &&
                    <ScrollView>
                        <View style={{marginTop: 20, gap: 5}}>
                            {allSongs.map((song, index) =>
                                <SongCard song={song} key={song.title} icon={() =>
                                    <TouchableOpacity onPress={() => pick(song)}>
                                        <Image source={IMAGES.icons.plus} style={{width: 48 / 2, height: 48 / 2, margin: 5}}/>
                                    </TouchableOpacity>
                                }/>
                            )}
                        </View>
                    </ScrollView>
                }

                {!search &&
                    <View style={{flex: 1, ...CENTER}}>
                        <View style={{flex: 1, width: 200, ...CENTER}}>
                            <Image source={IMAGES.picksong.song} style={{width: 301 / 2, height: 300 / 2, marginVertical: 5, opacity: .5}}/>
                            <Text style={{textAlign: 'center', ...STYLES.P}}>Your mate will love your songs. Choose wisely!</Text>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                }
            </View>
        </CustomSafeArea>
    );
}
