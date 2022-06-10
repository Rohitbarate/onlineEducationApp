import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 
            onPress={()=>{navigation.navigate('Home')}} 
             >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} 
             onPress={()=>{navigation.navigate('Courses')}}
             >
                <Text style={styles.buttonText}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Certificates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>User</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        height: '7%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
})