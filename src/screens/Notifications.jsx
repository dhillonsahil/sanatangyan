import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const Notifications = () => {
    const navigation = useNavigation()
  return (
    <View className=" flex-1">
      <ArrowLeftCircleIcon style={{marginTop:heightPercentageToDP(1),marginLeft:widthPercentageToDP(2)}} onPress={()=>navigation.goBack()} color={'#F68B1F'} size={heightPercentageToDP(4)} />
      {/*  To Do */}
      <View className="flex-1 justify-center items-center">
      <Text className='text-red-700'>No New Notifications</Text>
      </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})