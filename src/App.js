import React , {useState,useEffect} from 'react';
import {View , ScrollView} from 'react-native';
import FlexBox from './page/FlexBox';
import Position from './page/Position';
import PropsDinamis from './page/PropsDinamis';
import SimpleComponent from './page/SimpleComponent';
import StylingReact from './page/StylingReact';
import StateDinamis from './page/StateDinamis';

const App = () => {
  const [isShow , SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false)
    }, 6000)
  }, [])

  return(
    <View>
      <ScrollView>
        {/* <SimpleComponent/>
        <StylingReact/> */}
        {/* <FlexBox/> */}
        {/* <Position/> */}
        {/* <PropsDinamis/> */}
        <StateDinamis/>
      </ScrollView>
    </View>
  );
};

export default App;