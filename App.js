import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,ScrollView,FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';
export default function App() {
   const[ModalIsVisible,setModalIsVisible]=useState(false)
  // const [enteredtext,setenteredtext]=useState('');
  const [coursegoals,setcoursegoals]=useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  // function goalInputHandler (enteredtext){
  //   setenteredtext(enteredtext)
  // }

  // function addGoalHandler (){
  function addGoalHandler (enteredtext){
    setcoursegoals(currentcoursegoals => [
      ...currentcoursegoals,
      // enteredtext
     {text: enteredtext, id:Math.random().toString()}
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setcoursegoals((currentcoursegoals)=>{
      return currentcoursegoals.filter((goal)=>goal.id!==id)
    })
    console.log('DELETED !!!');
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
    <Button 
    title='ADD NEW GOAL' 
    color='#5e0acc' 
    onPress={startAddGoalHandler} 
    />
      {/* {ModalIsVisiable &&<GoalInput onAddGoal={addGoalHandler} />} */}
      <GoalInput visible={ModalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.list} >
      <Text style={styles.listtext}>list of goals...</Text>
      
      {/* <ScrollView alwaysBounceVertical={false}>
        {coursegoals.map((goal)=>
          <View style={styles.card} key={goal.id} >
            <Text style={styles.cardtext} >{goal.text}</Text>
          </View>)}
      </ScrollView> */}
      <FlatList
       data={coursegoals}
      renderItem={itemData =>{
        return(
          <GoalItem 
          text={itemData.item.text}
          onDeleteItem={deleteGoalHandler}
          id={itemData.item.id}
          />
        )
      }}
      alwaysBounceVertical={false}
      keyExtractor={(item,index)=>{
        return item.id
      }}
       />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1e085a',
    // alignItems: 'stretch',
    // justifyContent: 'space-between',
    // flexDirection:'column',
    paddingTop:50,
    paddingHorizontal:15
  },
  list:{
    flex:5,
    // borderWidth:1,
    // borderColor:'#cccccc',
    padding:8,
    marginBottom:8
  },
  listtext:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:8,
    color:'#fff'
  },
});
