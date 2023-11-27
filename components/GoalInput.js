import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, Button, View, Modal, Image} from 'react-native';

function GoalInput({onAddGoal,onCancleGoal,visible}){
  const[enteredGoal,setEnteredGoal]=useState("");
  function inputTextHandler(enteredText){
    setEnteredGoal(enteredText);
  }
  function addGoalHandler(){
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }
  const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity 
        className="bg-[#0EA5E9] h-10 px-3 py-2 items-center justify-center flex flex-row rounded-md shadow-md border border-gray-400"
        onPress={onPress}
      >
        <Text className="text-white text-center">{title}</Text>
      </TouchableOpacity>
    );
  };
    return(
        <Modal visible={visible} animationType='slide'>
            <View className="bg-gray-800 h-full w-full  flex flex-col justify-center items-center">
                <Image source={require("../assets/images/goal.png")}
                    className="w-[100px] h-[100px] "
                />
                <TextInput className="h-12 w-[90%] pl-4 border text-gray-300 placeholder:text-white border-gray-400 border-1 rounded-lg"
                placeholder="Type your goal"
                placeholderTextColor="#e0e0e0" 
                value={enteredGoal}
                onChangeText={inputTextHandler}
                />
                <View className="flex flex-row mt-4 ">
                    <View className="w-1/4 mr-2">
                        <CustomButton 
                            title='Add Goal' 
                            onPress={addGoalHandler} 
                        />
                    </View>
                    <View className="w-1/4 ">
                        <CustomButton 
                            title='Cancel' 
                            onPress={onCancleGoal} 
                        />
                    </View>
                </View>
            </View>
        </Modal>

    );
}
export default GoalInput;