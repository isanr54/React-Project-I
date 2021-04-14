import React , {Component} from 'react';
import {View , Text , TextInput , Image} from 'react-native';

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

  export default SimpleComponent;