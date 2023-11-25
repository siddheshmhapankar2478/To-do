import React, {useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default function App() {
  function goalInputHandler(){

  }
  function addGoalHandler(){
    
  }
  return (
    <View className="flex-1 ">
      <View className="w-full flex flex-row justify-center items-center pb-5 border-0 border-b border-b-gray-400 mt-20 ">
        <TextInput className="h-12 w-3/5 pl-4 mx-2 border border-gray-200 border-1"
        placeholder="Type your goal"
        onChangeText={goalInputHandler}
        />
        <Button className="" title='Add Goal'/>
      </View>
      <View className="flex flex-row justify-center mt-10 ">
      <Text>List of Goals</Text>
      </View>
    </View>
  );
}

