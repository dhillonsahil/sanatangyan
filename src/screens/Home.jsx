import { StyleSheet, Text, View,ScrollView, Image, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
// import {  } from 'react-native-reanimated/lib/typescript/Animated'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  const [categories,setCategories]=useState([])
  const [recommnded,setRecommnded]=useState([{"bookname":"gitaHindi","imageUrl":"http://192.168.101.190:5001/uploads/bhagvatgita.jpg","pdfLink":"http://192.168.101.190:5001/uploads/bhagvad-gita-hindi.pdf"},{"bookname":"gitaHindi","imageUrl":"http://192.168.101.190:5001/uploads/bhagvatgita.jpg","pdfLink":"http://192.168.101.190:5001/uploads/bhagvad-gita-hindi.pdf"},{"bookname":"gitaHindi","imageUrl":"http://192.168.101.190:5001/uploads/bhagvatgita.jpg","pdfLink":"http://192.168.101.190:5001/uploads/bhagvad-gita-hindi.pdf"},{"bookname":"gitaHindi","imageUrl":"http://192.168.101.190:5001/uploads/bhagvatgita.jpg","pdfLink":"http://192.168.101.190:5001/uploads/bhagvad-gita-hindi.pdf"}])
  useEffect(()=>{
    const getCategories = async()=>{
      const response = await fetch('http://192.168.101.190:5001/api/getbook/getCategories');
      const res = await response.json();
      setCategories(res);
    }
    getCategories()
  },[])

 
  return (
    <View className="bg-white" style={{flex:1,}}>
      <ScrollView  >
      <Navbar />
      <Text style={{fontSize:hp(3)}} className="text-neutral-700 m-3"> हरि ॐ</Text>
      <Text style={{fontSize:hp(3)}} className="text-neutral-700 m-3"> Recommded Books</Text>
      <View style={{height:hp(25)}}>
      <ScrollView horizontal={true}  >
        {
          recommnded.map((item,index)=>{
            return (
              <View key={index} style={{height:hp(25),marginHorizontal:hp(2)}}>
                <Image style={{height:hp(22),borderRadius:5,width:wp(30)}} src={item.imageUrl}/>
                <Text className="text-neutral-500">{item.bookname}</Text>
              </View>
      
      )
    })
  }
      </ScrollView>
      </View>
  <Text style={{fontSize:hp(3)}} className="text-neutral-700 m-3"> Categories</Text>
  
  
        {
          categories.map((item,index)=>{
            return (
             <View key={index} className="my-3 flex-1"  style={{borderRadius:10,height:hp(10),width:wp(90),marginHorizontal:wp(2),borderWidth:0.5,marginHorizontal:wp(3)}}>
              <Pressable   className="my-3 flex-1 flex-row items-center justify-center align-middle"   onPress={()=>{
              navigation.navigate('AllBooks',{
                categoryName:item.category_name,
                imageLink:item.image
              })
             }} key={index } >
               <View  className="my-3 flex-1 items-center justify-center align-middle" >
                <Image className="absolute left-3" style={{height:hp(8),width:wp(9)}} src='http://192.168.101.190:5001/uploads/shankh.jpg' alt='logo' />
                <Text className="text-neutral-500 mx-4" style={{fontSize:hp(2), fontWeight:'600'}}>{item.category_name}</Text>
                
              </View>
             </Pressable>
             </View>
      
      )
    })
  }
      </ScrollView>
  
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  dec:{
    color:'black',
  }
})