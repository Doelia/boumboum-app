import {Image, Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {COLORS, CONTENT_PADDING, STYLES} from "../../../styles";
import CustomButton from "../../../common/CustomButton";
import {useState} from "react";
import SongPicker from "../../../common/SongPicker";
import {IMAGES} from "../../../assets";
import SongCard from "../components/SongCard";

export default function FavoriteSongs({navigation, rootNavigation}) {

    const [mySongs, setMySongs] = useState([]);

    const [pickSongModalVisible, setPickSongModalVisible] = useState(false);

    function searchSong() {
        setPickSongModalVisible(true);
    }

    function removeSong(title) {
        setMySongs(mySongs.filter(song => song.title !== title));
    }

    function btnFinished() {
        rootNavigation.replace('StartMatching');
    }

    const maxSongsReached = mySongs.length >= 5;

    return (
        <>

            <Modal
                animationType="slide"
                transparent={false}
                visible={pickSongModalVisible}
                onRequestClose={() => setPickSongModalVisible(false)}>
                <SongPicker mySongs={mySongs} setMySongs={setMySongs} onBack={() => setPickSongModalVisible(false)}/>
            </Modal>

            <View style={{flex: 1}}>
                <View style={{flex: 1, paddingHorizontal: CONTENT_PADDING, paddingVertical: 15}}>
                    <View>
                        <Text style={{...STYLES.P, marginBottom: 10}}>Step 3 of 3</Text>
                        <Text style={{...STYLES.H2}}>Add favorites songs</Text>
                        <Text style={{...STYLES.P}}>Choose five songs that your mates will love</Text>
                    </View>

                    <TouchableOpacity disabled={maxSongsReached} onPress={searchSong}
                        style={{ borderColor: COLORS.BORDER, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20, opacity: maxSongsReached ? .3 : 1 }}
                    >
                        <Text style={{flex: 1, ...STYLES.FONT_INPUT}}>{!maxSongsReached ? 'Add a new song...' : 'Remove a song before adding a new one'}</Text>
                        <Image source={IMAGES.icons.search} style={{width: 80 / 2, height: 80 / 2, marginVertical: 5}}/>
                    </TouchableOpacity>

                    <ScrollView style={{marginTop: 15}}>
                        <View style={{marginTop: 5, gap: 8}}>
                            {mySongs.map((song) =>
                                <SongCard song={song} key={song.title} icon={() =>
                                    <TouchableOpacity onPress={() => removeSong(song.title)}>
                                        <Image source={IMAGES.icons.trash} style={{width: 48 / 2, height: 48 / 2, margin: 5}}/>
                                    </TouchableOpacity>
                                }/>
                            )}
                        </View>
                    </ScrollView>

                </View>
                <View style={{alignItems: 'center', paddingHorizontal: CONTENT_PADDING}}>
                    <CustomButton disabled={mySongs.length === 0}
                                  title={mySongs.length > 0 ? 'Finish' : 'Select at least one song'}
                                  onPress={btnFinished}
                    />
                </View>
            </View>

        </>
    );
}
