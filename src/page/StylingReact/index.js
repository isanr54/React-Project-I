import React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const StylingReact = () => {
    return(
      <View>
        <Text style={warna.text}>TB CCCP</Text>
        <View 
          style={{
              width:100,
              height:100,
              backgroundColor:'#0adbe3',
              borderWidth:2,
              borderColor:'#4c9a00',
              margin:10
          }}
        />
        <View style={warna.view}>
          <Image source={macbook} style={warna.image}/>
          <Text style={warna.judulText}>MacBook Pro 2020</Text>
          <Text style={warna.harga}>Rp. 25.000.000</Text>
          <Text style={warna.lokasi}>Bandung</Text>
          <View style={{backgroundColor:'#6FCF97',paddingVertical:6,borderRadius:20,marginTop:20}}>
            <Text style={warna.button}>Beli</Text>
          </View>
        </View>
      </View>
    );
  }
  
  const warna = StyleSheet.create({
    view:{
      width:212,
      padding:12,
      backgroundColor:'#f2f2f2'
    },
    text:{
      fontSize:20,
      color:'#adbe00',
      fontWeight:'bold'
    },
    image:{
      width:188,
      height:107,
      borderRadius:8
    },
    judulText:{
      fontSize:14,
      marginTop:16,
      fontWeight:'bold'
    },
    lokasi:{
      fontSize:12,
      fontWeight:'300',
      marginTop:12,
      color:'#000'
    },
    harga:{
      color:'#F2994A',
      fontWeight:'bold',
      marginTop:12,
      fontSize:12
    },
    button:{
      fontSize:14,
      fontWeight:'600',
      color:'white',
      textAlign:'center'
    }
  });

  export default StylingReact;