// import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Pdf from 'react-native-pdf'
// import Navbar from '../components/Navbar';



// const PdfViewer = ({route}) => {
//     const [url,setUrl]=useState('');
//     const {bookLink} =route.params;
//     useEffect(()=>{
//       console.log(bookLink)
//         // setUrl(bookLink);
//       },[])

//   return (
//     <View  style={{flex:1}}>
//         <Navbar />
//         <Text className="text-neutral-500">{bookLink}</Text>
//      {/* {
//       bookLink && <Pdf renderActivityIndicator={()=><ActivityIndicator color='black' size="large" />} scale={2.0} minScale={0.5} horizontal source={{uri:bookLink}} style={{ flex:1,width:Dimensions.get('window').width , backgroundColor:'red' }} />
//      } */}
//      {
//   // bookLink && (
//   //   <Pdf
//   //     source={{ uri: bookLink, cache: true }}
//   //     onLoadComplete={(numberOfPages, filePath) => {
//   //       // Do something when the PDF is loaded
//   //     }}
//   //     onPageChanged={(page, numberOfPages) => {
//   //       // Handle page changes if needed
//   //     }}
//   //     onError={(error) => {
//   //       console.error(error);
//   //       // Handle errors if any
//   //     }}
//   //     style={{ flex: 1, width: Dimensions.get('window').width, backgroundColor: 'red' }}
//   //   />
//   // )
// }

     
//     </View>
//   )
// }

// export default PdfViewer

// const styles = StyleSheet.create({})
// import Pdf from "react-native-pdf";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const PdfReader = ({route}) => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>PdfReader</Text>
    </View>
  )
}

export default PdfReader

const styles = StyleSheet.create({})