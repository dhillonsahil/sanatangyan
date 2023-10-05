import { Image, StyleSheet, Text, View,ScrollView, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import {  heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const BookDetails = ({route}) => {
  const navigation = useNavigation()
  const [availableBooks,setAvailableBooks]=useState([])
  useEffect(()=>{
    const getLangs = async()=>{
      const books = await route.params.availableBooks;
      setAvailableBooks(books);
      console.log(availableBooks)
    };
    getLangs();
  },[])
  return (
    <View className="bg-white">
      
      <Navbar />
      <ArrowLeftCircleIcon style={{marginTop:hp(1),marginLeft:wp(2)}} onPress={()=>navigation.goBack()} color={'#F68B1F'} size={hp(4)} />
      <View className="flex items-center"><Image src={route.params.imageLink} style={{height:hp(30),width:wp(40)}} /></View>
      <Text className="text-neutral-700 m-3" style={{fontSize:hp(3)}}>{route.params.bookName}</Text>
      <Text className="text-neutral-700 m-3" style={{fontSize:hp(2)}}>Available Languages</Text>
      <ScrollView>
        {
          availableBooks.length===0?<Text>No Books Found Currently</Text>:(
            availableBooks.map((item,index)=>{
              return (
                <View key={index} style={{height:hp(10),width:wp(95),borderWidth:0.2,borderRadius:2}} className="first-letter: mx-auto bg-gray-50">
                  <Pressable onPress={()=>{
                    navigation.navigate('PdfReader',{
                      bookLink:item.bookLink
                    })
                  }} className="flex-1 flex-row">
                    <Image src={route.params.imageLink} style={{height:hp(10),width:wp(12),borderRadius:5}} />
                    <View className="flex justify-between p-3" style={{marginHorizontal:3}}>

                    <Text className="text-neutral-500" style={{fontSize:hp(3),fontWeight:'800'}}>{route.params.bookName}</Text>
                    <Text className="text-neutral-500" style={{fontSize:hp(2),fontWeight:'600'}}>{item.bookName}</Text>
                    </View>
                    <View className=" justify-center align-middle absolute right-3 top-3 bottom-3">
                      
                    <Text className="bg-orange-600 rounded-full p-3">Read Now</Text>
                    </View>
                  </Pressable>
                </View>
              )
            })
          ) 
        }
      </ScrollView>

    </View>
  )
}

export default BookDetails

const styles = StyleSheet.create({})