import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import topCourses from '../api/topCourses';

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontSize: 18 }]}>Welcome,</Text>
        <Text style={{ fontSize: 32, color: '#f57608' }}>Rohit Barate</Text>
        <Image source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/education-application-4805420-4002559.png' }}
          style={styles.banner}
        />
      </View>
      <View style={styles.topCourseContainer}>
        <Text style={styles.topCourseHeading}>Our Top Courses </Text>
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
      >
        <Text style={styles.buttonText}>Start Learning</Text>
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
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  banner: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#f5760882',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 26
  },
  FlatList: {
    height: '40%',
    marginTop: 20
  },
  topCourseContainer: {
    width: '100%',
    display:'flex',
    alignItems:'center',
    textAlign:'center'
  },
  topCourseHeading: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 10,
    letterSpacing: 2,
    
  },
  courseBox: {
    height: 200,
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
    width: '80%',
    height: undefined,
    aspectRatio: 1
  },
  courseName: {
    fontSize: 18,

  }
})