import {View} from "react-native";
import CardHeader from "./CardHeader";
import Carousel from "./Carousel";
import CarouselSteps from "./CarouselSteps";
import {useEffect, useState} from "react";

export default function CardContent({profile, setCurrentIdBackground}) {

    const [idxItemActive, setIdxItemActive] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(200);

    const carouselItems = buildItems(profile);

    useEffect(() => {
        setCurrentIdBackground(profile.songs[idxItemActive] ? profile.songs[idxItemActive].title : null);
    }, [idxItemActive]);

    function onLayout(event) {
        setCarouselWidth(event.nativeEvent.layout.width);
    }

    return (
        <>
            <CardHeader user={profile.user} sayOnlyHello={idxItemActive === carouselItems.length - 1}/>
            <View onLayout={onLayout} style={{width: '100%', flex: 1, alignItems: 'center'}}>
                <Carousel
                    idxItemActive={idxItemActive}
                    setIdxItemActive={setIdxItemActive}
                    carouselWidth={carouselWidth}
                    items={carouselItems}
                ></Carousel>
                <View style={{height: 20}}></View>
                <CarouselSteps idxItemActive={idxItemActive} items={carouselItems}/>
                <View style={{height: 20}}></View>
            </View>
        </>
    )
}

function buildItems({user, songs}) {

    let items = [
        ...songs.map(song => ({...song, type: 'SONG'})),
        {type: 'USER', ...user},
    ];

    // Add indexes
    items = items.map((item, index) => ({...item, idx: index}));

    return items;
}
