import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Task from './components/Task';
import Checkbox from './components/checkbox';
import React, { useState } from 'react';

export default function App() {
     const [task,setTask]=useState('');
     const [tasks,setTasks]=useState([]);

     const handleAdd=()=>{
          if(task.trim()===''){
               return ;
          }
          setTasks([...tasks,task]);
          setTask('');
     };

     const handleDelete=(index)=>{
          setTasks(tasks.filter((_,taskIndex) => taskIndex!==index));
     };

     return (
     <View style={styles.container}>

          {/* Today's Tasks */}
          <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>

          <View style={styles.items}>
               {tasks.map((item,index)=> (
                    <Task
                         key={index} text={item} 
                         onLongPress={()=>handleDelete(index)}
                    />

               ))}
          </View>


          </View>

          <View style={styles.writeTask}>
               <TextInput 
                    style={styles.input}
                    placeholder="write a task"
                    value={task}
                    onChangeText={(text)=>setTask(text)}
               />
               <TouchableOpacity style={styles.addtask}
                    onPress={handleAdd}
               >
                    <Text style={styles.addbutton}>+</Text>
               </TouchableOpacity>
          </View>

     </View>
     );
}

const styles = StyleSheet.create({
     container: {
     flex:1,
     backgroundColor: '#666666',
     },
     tasksWrapper: {
     paddingTop: 30,
     paddingHorizontal: 20,
     },
     sectionTitle: {
     textAlign: 'center',
     fontSize: 24,
     fontWeight: 'bold',
     },
     items: {
     paddingTop: 50,
     paddingHorizontal: 24,
     },
     writeTask:{
          position:'absolute',
          bottom:30,
          left:20,
          right:20,
          flexDirection:'row',
          alignContent:'center',

     },
     input:{
          backgroundColor:'#FFFFFF',
          padding:15,
          borderRadius:10,
          flex:1,
     },
     addtask:{
          
          width:50,
          height:50,
          backgroundColor:"#FFFFFF",
          borderRadius:25,
          marginLeft:10,
          alignItems:'center',
          justifyContent:'center',
     },
     addbutton:{
          fontSize:25,
          color:'#55BCF6',
     }
 
});