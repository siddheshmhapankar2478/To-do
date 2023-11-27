import React, {useState} from 'react';
import { View, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
// import AntDesignIcons from 'react-native-vector-icons/AntDesign';
export default function App() {
  const[modalIsVisible,setModalIsVisible]=useState(false);
  const[listOfGoals,setListOfGoals]=useState([]);
  const[listOfCompletedGoals,setListOfCompletedGoals]=useState([]);
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function deleteGoalHandler(id,itemData){
    setListOfGoals((currentGoals)=>currentGoals.filter((goal)=>goal.id!==id));
    setListOfCompletedGoals((currentListOfCompletedGoals)=>[...currentListOfCompletedGoals ,{text:itemData,id:id}]);
  }
  function deleteCompletedGoalHandler(id,itemData){
    setListOfCompletedGoals((currentGoals)=>currentGoals.filter((goal)=>goal.id!==id));
    setListOfGoals((currentListOfCompletedGoals)=>[...currentListOfCompletedGoals ,{text:itemData,id:id}]);
  }
  function addGoalHandler(enteredGoal){
    setListOfGoals((currentListOfGoals)=>[...currentListOfGoals ,{text:enteredGoal,id:Math.random().toString()}]);
    endAddGoalHandler();
  }
  const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity 
        className="bg-[#0EA5E9] h-10 px-3 py-2 items-center justify-center flex flex-row rounded-md shadow-md border border-gray-400"
        onPress={onPress}
      >
      {/* <AntDesignIcons name="plus" color={'white'} size={16}/> */}
        <Text className="text-white text-center">{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
    <StatusBar style='light'/>
    <View className="h-full">
    <View className="flex flex-row justify-center items-center mx-auto w-1/2 mt-20">
      <CustomButton 
        title='Add New Goal' 
        onPress={startAddGoalHandler} 
      />
    </View>
      {
        modalIsVisible&&<GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancleGoal={endAddGoalHandler}/>
      }
      {
        (listOfGoals.length==0)?(null):
      (<View  className="flex-1 mx-4 mt-5">
        <Text className="font-bold text-white pb-2 border-0 border-gray-500 mb-3 border-b-2">Ongoing</Text>

        <FlatList data={listOfGoals} 
        renderItem={(itemData)=>{
              return(
                <GoalItem id={itemData.item.id} itemData={itemData.item.text} onDeleteItem={deleteGoalHandler}/>
              );
        }} r
        keyExtractor={(item,index)=>`${item}-${index}`}
        />
      </View>)
      }
      {
        (listOfCompletedGoals.length==0)?(null):
      (<View className="flex-1 mx-4 mt-5 mb-2">
          <Text className="font-bold text-white pb-2 border-0 border-gray-500 mb-3 border-b-2">Completed</Text>
          <FlatList data={listOfCompletedGoals} 
          renderItem={(itemData)=>{
                return(
                  <GoalItem id={itemData.item.id} itemData={itemData.item.text} onDeleteItem={deleteCompletedGoalHandler}/>
                );
          }} r
          keyExtractor={(item,index)=>`${item}-${index}`}
          />
        </View>) 
      }
    </View>
    </>
  );
}

