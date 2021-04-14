import React , { Component , useEffect , useState} from "react";
import { Text, View , Image } from "react-native";

// class FlexBox extends Component{
//     constructor(props){
//         super(props);
//         console.log('=====> Constructor');
//         this.state = {
//             subscriber:200,
//         };
//     }

//     componentDidMount(){
//         console.log('=====> componentDidMount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber:600,
//             });
//         },200);
//     }

//     componentDidUpdate(){
//         console.log('=====> componentDidUpdate');
//     }

//     componentWillUnmount(){
//         console.log('=====> componentWillUnmount');
//     }

//     render(){
//         console.log('=====> Render');
//         return (
//             <View>
//                 <View 
//                     style={{
//                         flexDirection:'row',
//                         backgroundColor:'#e4e4e4',
//                         alignItems:'center',
//                         justifyContent:'space-between'
//                     }}
//                 >
//                     <View style={{backgroundColor:'#ee5253',width:50,height:50}}/>
//                     <View style={{backgroundColor:'#feca57',width:50,height:90}}/>
//                     <View style={{backgroundColor:'#1dd1a1',width:50,height:130}}/>
//                     <View style={{backgroundColor:'#5f27cd',width:50,height:170}}/>
//                 </View>
//                 <View style={{flexDirection:'row',alignItems:'center'}}>
//                     <Image 
//                         source={{
//                             uri:'https://yt3.ggpht.com/ytc/AAUvwngr8WArSO2cENOfkQROBSNaSZRf1gjdqo1VkmHzmw=s88-c-k-c0x00ffffff-no-rj'
//                         }} 
//                         style={{
//                             width:100,height:100,borderRadius:50,marginRight:14
//                         }} 
//                     />
//                     <View>
//                         <Text style={{fontSize:20,fontWeight:'bold'}}>Первый канал Евразия</Text>
//                         <Text>{this.state.subscriber} rb Subscriber</Text>
//                     </View>
//                 </View>
//                 <View
//                     style={{
//                         flexDirection:'row',
//                         justifyContent:'space-around'
//                     }}
//                 >
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Channel</Text>
//                     <Text>Tentang</Text>
    //             </View>
    //         </View>

    //     );
    // }
// }

const FlexBox = () => {
    const [subscriber,setSubscriber] = useState(200);        
    useEffect(() => {
        console.log('did mount');
        setTimeout(() => {
            setSubscriber(400);
        },2000);
        return () => {
            console.log('did update');
        };
    }, [subscriber])

    // useEffect(() => {
    //     console.log('did update');
    //     setTimeout(() => {
    //         setSubscriber(400);
    //     },2000);
    // }, [subscriber])

    return (
        <View>
            <View 
                style={{
                    flexDirection:'row',
                    backgroundColor:'#e4e4e4',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}
            >
                <View style={{backgroundColor:'#ee5253',width:50,height:50}}/>
                <View style={{backgroundColor:'#feca57',width:50,height:90}}/>
                <View style={{backgroundColor:'#1dd1a1',width:50,height:130}}/>
                <View style={{backgroundColor:'#5f27cd',width:50,height:170}}/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image 
                    source={{
                        uri:'https://yt3.ggpht.com/ytc/AAUvwngr8WArSO2cENOfkQROBSNaSZRf1gjdqo1VkmHzmw=s88-c-k-c0x00ffffff-no-rj'
                    }} 
                    style={{
                        width:100,height:100,borderRadius:50,marginRight:14
                    }} 
                />
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Первый Kанал Евразия</Text>
                    <Text>{subscriber} rb Subscriber</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-around'
                }}
            >
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Playlist</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Tentang</Text>
            </View>
        </View>

    );
}

export default FlexBox;