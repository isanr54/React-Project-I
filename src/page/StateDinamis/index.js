import React , {Component, useState} from 'react';
import {Text,StyleSheet,Image,View, Button} from 'react-native';

const Counter = () => {
    const [number,setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button title='Tambah' onPress={()=> setNumber(number+1)}/>
        </View>
    );
}

class CounterClass extends Component {
    state = {
        number : 0
    };
    render(){
        return(
            <View>
                <Text>{this.state.number}</Text>
                <Button title='Tambah' onPress={()=> this.setState({number:this.state.number+1})}/>
            </View>
        );
        
    }
}

const StateDinamis = () => {
    return(
        <View style={style.wrapper}>
            <Text style={style.judul}>Materi Dynamic Component Dengan State</Text>
            <Counter/>
            <CounterClass/>
        </View>
    );
}

const style = StyleSheet.create({
    wrapper:{
        padding:20
    },
    judul:{
        textAlign:'center'
    },
});

export default StateDinamis;