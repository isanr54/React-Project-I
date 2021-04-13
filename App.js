import React from 'react';
import {View , ScrollView} from 'react-native';
import FlexBox from './FlexBox';
import PositionReact from './PositionReact';
import SimpleComponent from './SimpleComponent';
import StylingReact from './StylingReact';

const App = () => {
  return(
    <View>
      <ScrollView>
        {/* <SimpleComponent/>
        <StylingReact/>
        <FlexBox/> */}
        <PositionReact/>
      </ScrollView>
    </View>
  );
};

export default App;