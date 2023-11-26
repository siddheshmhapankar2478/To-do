import React, {useState} from 'react';
import { View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[modalIsVisible,setModalIsVisible]=useState("");
  const[listOfGoals,setListOfGoals]=useState([]);
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(true);
  }
  function deleteGoalHandler(id){
    setListOfGoals((currentGoals)=>currentGoals.filter((goal)=>goal.id!==id));
  }
  function addGoalHandler(enteredGoal){
    setListOfGoals((currentListOfGoals)=>[...currentListOfGoals ,{text:enteredGoal,id:Math.random().toString()}]);
    endAddGoalHandler();

  }
  return (
    <View className="min-h-full">
    <View className="flex justify-center items-center mx-auto w-1/2 mt-20">
      <Button title='Add New Goal' color={"#5e0acc"} 
      onPress={startAddGoalHandler}/>
    </View>
      {
        (!modalIsVisible)?(null):(
          <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
        )
      }
      <View className="w-full flex flex-col justify-center mx-7 my-10 mb-80 ">
        <FlatList data={listOfGoals} 
        renderItem={(itemData)=>{
              return(
                <GoalItem id={itemData.item.id} itemData={itemData.item.text} onDeleteItem={deleteGoalHandler}/>
              );
        }} 
        keyExtractor={(item,index)=>`${item}-${index}`}
        />
      </View>
    </View>
  );
}

