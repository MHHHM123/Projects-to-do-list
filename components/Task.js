import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';


const Task =(props)=>{
 
    return (
        <TouchableOpacity style={styles.item}
            onLongPress={props.onLongPress}
            delayLongPress={1000}
        >
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.onetask}>{props.text}</Text>
            </View>

            <View style={styles.circle}></View>
        </TouchableOpacity>
    );

    
};
export default Task;

const styles=StyleSheet.create({
    item:{
        backgroundColor: '#F2F2F2',
        padding: 15,
        marginBottom: 10,   
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    
    itemleft:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        marginRight: 15,
    },
    onetask:{
        fontWeight: 'bold',
        color: '#333333',
        flexShrink: 1,
    },
    circle:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 6,
        marginLeft: 10,
    },
    

});

