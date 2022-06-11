import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Video } from 'expo-av';


const CourseVideo = ({route}) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const {link} = route.params
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={{
                    height: 300,
                    width: 300,
                     top: 0,
                     left:0,

                }}
                source={{
                    uri: link,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}

export default CourseVideo

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

})