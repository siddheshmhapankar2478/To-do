import React, {useState} from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const[enteredGoal,setEnteredGoal]=useState("");
  const[listOfGoals,setListOfGoals]=useState([]);
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }
  function addGoalHandler(){
    console.log(enteredGoal);
    setListOfGoals((currentListOfGoals)=>[...currentListOfGoals ,{text:enteredGoal,key:Math.random().toString()}]);
  }
  return (
    <View className="min-h-full">
      <View className="w-full flex flex-row justify-center items-center pb-5 border-0 border-b border-b-gray-400 mt-20 ">
        <TextInput className="h-12 w-3/5 pl-4 mx-2 border border-gray-200 border-1 rounded-lg"
        placeholder="Type your goal"
        onChangeText={goalInputHandler}
        />
        <Button className="" title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View className="w-full flex flex-col justify-center mx-7 my-10 mb-80 ">
        <FlatList data={listOfGoals} 
        renderItem={(itemData)=>{
              return(
                <GoalItem itemData={itemData.item.text}/>
              );
        }} 
        keyExtractor={(item,index)=>`${item}-${index}`}
        />
      </View>
    </View>
  );
}

