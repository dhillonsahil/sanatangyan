import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Navbar from '../components/Navbar'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const AllBooks = ({route}) => {
  
    const navigation = useNavigation()
 const [booksList,setAllBooks]=useState([])
 useState(()=>{
  const getAllBooks = async()=>{
    const response = await fetch(`http://192.168.101.190:5001/api/getbook/getBooks`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },body:JSON.stringify({
        categoryName : route.params.categoryName
      })
    })

    const resp = await response.json();
    setAllBooks(resp);
    console.log(resp)
  }
  getAllBooks()
 },[])
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <ScrollView>
      <Navbar />
      <ArrowLeftCircleIcon style={{marginTop:hp(1),marginLeft:wp(2)}} onPress={()=>navigation.goBack()} color={'#F68B1F'} size={hp(4)} />
      {
        booksList ?<View>
           <Text>AllBooks</Text>
      <View className="flex items-center"><Image src={route.params.imageLink} style={{height:hp(30),width:wp(40)}} /></View>
      <Text className="text-neutral-700 m-3" style={{fontSize:hp(3)}}>{route.params.categoryName}</Text>
      <Text className="text-neutral-700 m-3" style={{fontSize:hp(2)}}>Available Books</Text>
      {
        booksList.map((item,index)=>{
          return (
            <View key={index} className=" rounded-md mx-4 bg-slate-50 flex-row" style={{borderWidth:0.5,borderColor:'black' , height:hp(12) }}>
             <Pressable onPress={()=>{
              navigation.navigate('BookDetails',{
                bookName:item.book_name,
                availableBooks:item.available_books,
                imageLink:item.image
              })
             }} style={{flex:1}} className="flex flex-row">
             <Image style={{height:hp(10) ,borderRadius:5,margin:5, width:wp(12)}} src={item.image} />
              <View className="flex justify-between p-3">
              <Text className="text-neutral-700 " style={{fontSize:hp(2),fontWeight:'600'}}>{item.book_name}</Text>
              <View className="flex flex-row justify">
              <Text className="text-neutral-700" style={{fontSize:hp(2)}}>{
                item.available_books.map((booksLang,i)=>{
                  return (
                    <Text key={i} className="text-neutral-500 mx-4" style={{fontSize:hp(2),fontWeight:'500'}}>{booksLang.bookName+"  "}</Text>
                  )
                })
              }</Text>
                </View>
                </View>
             </Pressable>
            </View>
          )
        })
      }
        </View> : <ActivityIndicator size={'large'} color={'blue'} />
      }
     
   
      </ScrollView>
    </View>
  )
}

export default AllBooks

const styles = StyleSheet.create({})