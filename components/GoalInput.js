import React, {useState} from 'react';
import { TextInput, Button, View, Modal} from 'react-native';

function GoalInput({onAddGoal,visible}){
  const[enteredGoal,setEnteredGoal]=useState("");
  function inputTextHandler(enteredText){
    setEnteredGoal(enteredText);
  }
  function addGoalHandler(){
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }
    return(
        <Modal visible={visible} animationType='slide'>
            <View className="w-full flex flex-row justify-center items-center pb-5 border-0 border-b border-b-gray-400 mt-20 ">
                <TextInput className="h-12 w-3/5 pl-4 mx-2 border border-gray-200 border-1 rounded-lg"
                placeholder="Type your goal"
                value={enteredGoal}
                onChangeText={inputTextHandler}
                />
                <Button className="" title='Add Goal' onPress={addGoalHandler}/>
            </View>
        </Modal>

    );
}
export default GoalInput;