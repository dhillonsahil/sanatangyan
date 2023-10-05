import { ActivityIndicator, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf'
import Navbar from '../components/Navbar';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const PdfViewer = ({route}) => {
    const [url,setUrl]=useState('');
    const {bookLink} =route.params;
   
    const [pageNumber,setPageNumber]=useState(1);
    const [totalPages,setTotalPages]=useState(1);
  return (
    <View  style={{flex:1,backgroundColor:'white'}}>
        <Navbar />
    {
  bookLink && (
    <View style={{flex:1}}><Pdf
                    trustAllCerts={false}
                      source={{
                        uri: bookLink,
                        cache: true,
                      }}
                      onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${pageNumber}`);
                      }}
                      renderActivityIndicator={<ActivityIndicator size={'large'} color={'gray'} />}
                      onPageChanged={(page, numberOfPages) => {
                        // console.log(`Current page: ${page}`);
                        setPageNumber(page);
                        setTotalPages(numberOfPages)
                      }}
                      onError={error => {
                        console.log(error);
                      }}
                      onPressLink={uri => {
                        console.log(`Link pressed: ${uri}`);
                      }}
                      style={styles.pdf} page={pageNumber}
                     className="flex-1" />
                     <View className="flex flex-row justify-between text-center align-middle items-center" style={{height:heightPercentageToDP(4),width:widthPercentageToDP(95)}}>
                      <Text className="text-neutral-600">Showing Page </Text>
                      <View  className="mb-1 flex-row">
                      <Text className="text-neutral-600">{pageNumber}</Text>
                       
                      <Text className="text-neutral-600">/{totalPages}</Text>
                      </View>
                     </View>
                     </View>
  )
}

    </View>
  )
}

export default PdfViewer

const styles = StyleSheet.create({})
