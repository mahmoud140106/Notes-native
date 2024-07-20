import { 
    StyleSheet, 
    View,
    TextInput,
    Button,
    Modal,
    Text,
    Image
} from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [enteredtext,setenteredtext]=useState('');
    function goalInputHandler (enteredtext){
        setenteredtext(enteredtext)
      }

      function addGoalHandler (){
        if(enteredtext){props.onAddGoal(enteredtext);}
        setenteredtext('')
      }

    //   console.log('Goal Input Component Rendered.')
    //   console.log(enteredtext)
    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputcontainer}>
                <Image 
                style={styles.image} 
                source={require('../assets/images/goal.png')} 
                />
                <TextInput 
                style={styles.input} 
                placeholder='your course goal !'
                onChangeText={goalInputHandler}
                value={enteredtext}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL'  onPress={props.onCancel} color='#f31282'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD GOAL' onPress={addGoalHandler} color='#5e0acc' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputcontainer: {
      flex:1,
      padding:16,
    //   flexDirection:'row',
      alignItems:'center',
    //   justifyContent:'space-between',
      justifyContent:'center',
    //   marginBottom:8,
    //   borderBottomWidth:1,
    //   borderColor:'#cccccc',
      backgroundColor:'#31126b'
    },
    image:{
        height:100,
        width:100,
        margin:20
    },
    input:{
      borderWidth:1,
      borderColor:'#e4d0ff',
      backgroundColor:'#e4d0ff',
      color:'#120428',
      borderRadius:6,
      padding:16,
      width:'100%',
    //   marginRight:8
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:16
    },
    button:{
        width:100,
        marginHorizontal:8
    }
  });
  