import React , {Component} from 'react';
import {Image, Text, TextInput, View , StyleSheet} from 'react-native';
import macbook from './macbook.jpg';

const App = () => {
  return(
    <StylingReact/>
  );
};

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

const SimpleComponent = () => {
  return (
    <View>
      <View style={{width:80,height:80,backgroundColor:'#0adbe3'}}/>
      <Text>TB CCCP</Text>
      <Text>POCCNR 1</Text>
      <Lokal/>
      <Text>QAZAQ TV</Text>
      <Photo/>
      <TextInput style={{borderWidth:1}}/>
      <BoxGreen/>
      <Gambar/>
    </View>
  );
}

const Lokal = () => {
  return <Text>NET TV</Text>
}

const Photo = () => {
  return <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:100,height:100}}/>
}

class BoxGreen extends Component {
  render(){
    return <Text>Ini adalah stasiun TV Kanal 7</Text>
  }
}

class Gambar extends Component {
  render(){
    return(
      <View>
        <Image source={{uri:'https://placeimg.com/250/200/arch'}} style={{width:250,height:200}}/>
        <Text>Ini adalah gambar arsitektur</Text>
      </View>
    ); 
  }
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

export default App;