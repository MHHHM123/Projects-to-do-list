import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';


const checkbox =(props)=>{
    return (
        <TouchableOpacity onPress={props.onPress}
            style={props.style}
        > 
            <View style={styles.box}/>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    box:{
        width:20,
        height:20,
        borderWidth:1,
        borderRadius:12,
        backgroundColor:'#F2F2F2',
    },  
});


export default checkbox;