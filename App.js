// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from './components/screens/Course';
import CourseDetail from './components/screens/CourseDetail';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Navbar from './components/screens/Navbar';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Courses' component={Course} options={{ headerTitleAlign:'center' }}/>
        <Stack.Screen name='CourseDetails' component={CourseDetail} options={{ title: 'Course Name',headerTitleAlign:'center'}} /> 
         {/* pass the parameters remaining*/}
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height:'80%'
  },
});
