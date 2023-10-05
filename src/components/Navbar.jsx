import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BellIcon, SunIcon} from 'react-native-heroicons/solid'
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'


const Navbar = () => {
    const navigation = useNavigation()
  return (
    <View className="pt-3 ml-3 flex flex-row justify-between mr-3" >
        
        <SunIcon color={'#F17022'} size={hp(4)}  />
        <BellIcon onPress={()=>navigation.navigate('Notifications')} color='#FF5733' size={hp(4)} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})