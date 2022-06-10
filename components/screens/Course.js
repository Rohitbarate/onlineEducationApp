import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import courses from '../api/coursesApi'

const Course = ({ navigation }) => {

    const courseBox = ({ item }) => {
        return (
            <View style={styles.courseBox}>
                <Image source={{ uri: item.img }}
                    style={styles.courseImg}
                />
                <View style={styles.courseDetails}>
                    <Text style={styles.courseName}>{item.courseName}</Text>
                    <Text style={styles.courseDesc}>{item.description}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CourseDetails')}
                        style={styles.button}
                    >
                        <Text>More Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ alignSelf: 'center', fontSize: 28, }}>Our Courses</Text>
                <View style={{ borderBottomColor: '#000', borderBottomWidth: 1, width: '100%', marginTop: 5 }} />
            </View>
            <FlatList style={styles.flatList}
                data={courses}
                renderItem={courseBox}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Course

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    header: {
        width: '100%'
    },
    courseContainer: {
        margin: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList: {
        marginTop: 20,
        height: '100%'
    },
    courseBox: {
        width: '90%',
        backgroundColor: '#e5d5c7',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignSelf: 'center',
        height:450,
        maxHeight:500,
    },
    courseImg: {
        width: '80%',
        alignSelf: 'center',
        height: '50%',
        // resizeMode: 'contain',

    },
    courseDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '50%',
        paddingTop: 10,
        // shadowColor:'#000b',
        // shadowOpacity:10,
        // shadowOffset:10
    },
    courseName: {
        fontSize: 26,
        fontWeight: '500',
        paddingBottom: 10,
    },
    courseDesc: {
        lineHeight: 15,
        color: '#000b'
    },
    button: {
        backgroundColor: '#f5760882',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 10,
        borderRadius: 10
    },
})