import { StyleSheet, View,Text,Pressable} from 'react-native';

function GoalItem(props){
    return(
      <View style={styles.card}>
        <Pressable 
        // android_ripple={{color:'#210644'}}  
        android_ripple={{color:'#E4162B'}}  
        onPress={props.onDeleteItem.bind(this,props.id)}
        style={({pressed})=>pressed&&styles.pressedItem}
        >
          <Text style={styles.cardText} >{props.text}</Text>
        </Pressable>
      </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    card:{
      // borderWidth:1,
      // borderColor:'#cccccc',
      margin:10,
      borderRadius:6,
      // backgroundColor:'#5FADFC',
      backgroundColor:'#5e0acc',
    },
    pressedItem:{
      opacity:0.5
    },
    cardText:{
      color:'white',
      fontSize:15,
      padding:10,

    }
  });
  

