import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import courses from '../api/coursesApi'

const CourseDetail = ({ route, navigation }) => {
  const id = route.params.courseId
  const selectCourse = courses.find((course) => {
   return  course.id === id;
  })

  return (
    <View style={styles.container}>
      <Text style={{paddingVertical:5, alignSelf:'center',fontSize:22,letterSpacing:4}}>Happy Coding 🥰🥰</Text>
      <View style={styles.mainBox}>
        <View>
          <Text style={styles.courseName}>{selectCourse.courseName}</Text>
          <Text style={{ color: '#000a' }}>    {selectCourse.description} </Text>
        </View>
        <View>
          <Text style={styles.heading}>Offered By</Text>
          <Text style={[{ color: '#fff', fontSize: 16,letterSpacing:1 }]}>{selectCourse.mentor} </Text>
        </View>
      </View>
      <View style={styles.prerView}>
      <View style={styles.row}>
         <Image source={ require('../../assets/to-do-list.png')}style={styles.iconFlex}/>
        <Text style={styles.heading}>Prerequisite :</Text>
         </View>
        <Text style={styles.subHeading}>{selectCourse.preReq}</Text>
      </View>
      <View style={styles.prerView}>
      <View style={styles.row}>
         <Image source={ require('../../assets/earth.png')} style={styles.iconFlex}/>
        <Text style={styles.heading}>100% online</Text>
         </View>
        <Text style={styles.subHeading}>start instantly and learn at your own time</Text>
      </View>
      <View style={styles.prerView}>
         <View style={styles.row}>
         <Image source={ require('../../assets/calender.png')} style={styles.iconFlex}/>
        <Text style={styles.heading}>Flexible deadlines</Text>
         </View>
        <Text style={styles.subHeading}>Reset deadline in accordance to your time</Text>
      </View>
      <View style={styles.prerView}>
      <View style={styles.row}>
         <Image source={ require('../../assets/bar.png')} style={styles.iconFlex}/>
        <Text style={styles.heading}>{selectCourse.level} Level</Text>
         </View>
      </View>
      <View style={styles.prerView}>
      <View style={styles.row}>
         <Image source={ require('../../assets/clock.png')} style={styles.iconFlex}/>
        <Text style={styles.heading}>Approx. {selectCourse.time} months to complete</Text>
         </View>
        <Text style={styles.subHeading}>Suggested {selectCourse.time*8} hours/week</Text>
      </View>
      <View style={styles.prerView}>
      <View style={styles.row}>
         <Image source={ require('../../assets/languages.png')} style={styles.iconFlex}/>
        <Text style={styles.heading}>Languages :</Text>
         </View>
        <Text style={styles.subHeading}>English , Hindi , German , French</Text>
      </View>
      <View style={styles.prerView}>
      <View style={styles.row}>
         <Image source={ require('../../assets/money.png')} style={styles.iconFlex}/>
        <Text style={styles.heading}>Price :</Text>
         </View>
        <Text style={styles.subHeading}>{selectCourse.price} Rs.</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CourseVideo',{
          name : selectCourse.courseName,
          link : selectCourse.link
        })}
        style={styles.button}
      >
        <Text style={{ fontSize: 18 }}>Start Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CourseDetail

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  courseHname: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'center',
    letterSpacing:3,
    height:'5%',
    alignItems:'center',
    justifyContent:'center'
  },
  courseName: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 10,
  },
  mainBox: {
    width: '100%',
    height: '29%',
    backgroundColor: '#ef793e',
    padding: 10,
    justifyContent: 'space-between'
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center'
  },
  prerView: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  row:{
    display:'flex',
    flexDirection:'row'
  },
  iconFlex:{
    height:20,
    width:20,
    marginRight:10
  },
  heading: {
    fontSize: 20,
    fontWeight: '500'
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '200',
    color: 'grey',
    paddingLeft: 38
  },
  button: {
    backgroundColor: '#e76015',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    borderRadius: 10,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center'
  },
})