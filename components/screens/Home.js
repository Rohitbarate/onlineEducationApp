import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import topCourses from '../api/topCourses';
import courseTypes from '../api/courseTypes';
import { Video } from 'expo-av';

const Home = ({ navigation }) => {

  const courseBox = ({ item }) => {
    return (
      <View style={styles.courseBox}>
        <Image source={{ uri: item.img }}
          style={styles.courseImg}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseName}>{item.courseName}</Text>
        </View>
      </View>
    )
  }

  const courseType = ({item})=>{
    return <Text style={{alignSelf:'center',marginHorizontal:10,backgroundColor:item.color,borderRadius:10,display:'flex',justifyContent:'center',paddingVertical:15,paddingHorizontal:20,fontWeight:'800',letterSpacing:1,color:'#fff'}}>{item.name}</Text>
  }

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', alignItems: 'flex-start', width: '100%', paddingLeft: 20, marginBottom: 5 }}>
        <Text style={[styles.headerText, { fontSize: 18 }]}>Welcome,</Text>
        <Text style={{ fontSize: 32, color: '#f57608', paddingLeft: 10 }}>Rohit Barate</Text>
      </View>
      <View style={styles.header}>
        <Video
          style={styles.banner}
          source={{
            uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/online-education-3575818-2997699.mp4',
          }}
          resizeMode="contain"
          isLooping
          shouldPlay

        />
      </View>
      <View style={styles.topCourseContainer}>
      <FlatList
          data={courseTypes}
          renderItem={courseType}
          keyExtractor={item => item.id}
          horizontal={true}
        />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: 10, }}>
          <Text style={styles.topCourseHeading}>Our Best Courses </Text>
          <TouchableOpacity onPress={() => navigation.navigate('TopCourses')}
            style={{}} >
            <Text style={styles.topCourseSubheading}>See All </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.FlatList}
          data={topCourses}
          renderItem={courseBox}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Courses')}
        style={styles.button}
      ><Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 40,
    paddingBottom: 20
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  banner: {
    width: 500,
    height: 240,
    marginTop: 10
  },
  button: {
    backgroundColor: '#e76015',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 24
  },
  FlatList: {
    height: '40%',
    marginTop: 10
  },
  topCourseContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  topCourseHeading: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1,
  },
  topCourseSubheading: {
    fontSize: 16,
    fontWeight: '100',
    color: '#000b'
  },
  courseBox: {
    height: 150,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#ebe8e6',
    borderRadius: 10,

  },
  courseImg: {
    width: '60%',
    height: undefined,
    aspectRatio: 1
  },
  courseName: {
    fontSize: 18,

  }
})