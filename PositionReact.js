import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import cart from './cart.png';

const PositionReact = () => {
    return(
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.icon}/>
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        padding:20,
        alignItems:'center'
    },
    cartWrapper:{
        borderWidth:1,
        borderColor:'#4398D1',
        width:93,
        height:93,
        borderRadius:47,
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    icon:{
        width:50,
        height:50
    },
    text:{
        fontSize:12,
        color:'#777',
        fontWeight:'700',
        marginTop:8
    },
    notif:{
        fontSize:12,
        backgroundColor:'#6FCF97',
        color:'white',
        padding:5,
        borderRadius:25,
        width:25,
        height:25,
        position:'absolute',
        top:0,
        right:0
    }
});

export default PositionReact;