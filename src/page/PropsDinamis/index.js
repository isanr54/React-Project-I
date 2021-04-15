import React from 'react';
import {Image, Text,View, StyleSheet, ScrollView} from 'react-native';

const Story = (props) => {
    return(
        <View style={{alignItems:'center',marginHorizontal:10}}>
            <Image 
                source={{
                    uri:props.gambar
                }}
                style={{
                    width:75,
                    height:75,
                    borderRadius:75/2
                }}
            />
            <Text style={{maxWidth:75,textAlign:'center'}}>{props.judul}</Text>
        </View>
    );
}

const PropsDinamis = () => {
    return(
        <View>
            <Text>Story Instagram</Text>
            <ScrollView horizontal>
                <View style={{flexDirection:'row'}}>
                    <Story 
                        judul='Vernalta' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwninzKOKLP7Jv6fOm1HRg5xbyp_ygKKH1kMPMqzDzw=s88-c-k-c0x00ffffff-no-rj'
                    />
                    <Story 
                        judul='Stockbit' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwnjrRoF0XQzEfHTm-AJwyYOP7w3sUY9eI2jz8-0z=s176-c-k-c0x00ffffff-no-rj-mo'
                    />
                    <Story 
                        judul='Satu Persen' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwnhVf1985HaFGuKqWwB7P8K9_NROTO9g7-1W_8u_=s176-c-k-c0x00ffffff-no-rj-mo'
                    />
                    <Story 
                        judul='Atlassian' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwniLZPx9aNcr_bR39joFCOvoYpOSQuQjmfIvGIAP4Q=s176-c-k-c0x00ffffff-no-rj-mo'
                    />
                    <Story 
                        judul='Satu Persen' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwnhVf1985HaFGuKqWwB7P8K9_NROTO9g7-1W_8u_=s176-c-k-c0x00ffffff-no-rj-mo'
                    />
                    <Story 
                        judul='Atlassian' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwniLZPx9aNcr_bR39joFCOvoYpOSQuQjmfIvGIAP4Q=s176-c-k-c0x00ffffff-no-rj-mo'
                    />
                    <Story 
                        judul='Stockbit' 
                        gambar='https://yt3.ggpht.com/ytc/AAUvwnjrRoF0XQzEfHTm-AJwyYOP7w3sUY9eI2jz8-0z=s176-c-k-c0x00ffffff-no-rj-mo'
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default PropsDinamis;