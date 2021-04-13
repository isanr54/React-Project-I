import React from 'react';
import {View , ScrollView} from 'react-native';
import FlexBox from './FlexBox';
import SimpleComponent from './SimpleComponent';
import StylingReact from './StylingReact';

const App = () => {
  return(
    <View>
      <ScrollView>
        {/* <SimpleComponent/>
        <StylingReact/> */}
        <FlexBox/>
      </ScrollView>
    </View>
  );
};

export default App;