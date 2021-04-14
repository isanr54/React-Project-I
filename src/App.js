import React , {useState,useEffect} from 'react';
import {View , ScrollView} from 'react-native';
import FlexBox from './page/FlexBox';
import Position from './page/Position';
import SimpleComponent from './page/SimpleComponent';
import StylingReact from './page/StylingReact';

const App = () => {
  // const [isShow , SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false)
  //   }, 6000)
  // }, [])

  return(
    <View>
      <ScrollView>
        {/* <SimpleComponent/>
        <StylingReact/> */}
        <FlexBox/>
        {/* <Position/> */}
      </ScrollView>
    </View>
  );
};

export default App;