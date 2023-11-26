import React, {useState} from 'react';
import { TextInput, Button, View, Modal, Image} from 'react-native';

function GoalInput({onAddGoal,onCancleGoal,visible}){
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
            <View className="bg-black h-full w-full  flex flex-col justify-center items-center">
                <Image source={require("../assets/images/goal.png")}
                    className="w-[100px] h-[100px] "
                />
                <TextInput className="h-12 w-[90%] pl-4 border text-white placeholder:text-white border-gray-200 border-1 rounded-lg"
                placeholder="Type your goal"
                value={enteredGoal}
                onChangeText={inputTextHandler}
                />
                <View className="flex flex-row mt-4 ">
                    <View className="w-1/4 mr-2">
                        <Button className="" title='Add Goal' color={"#0EA5E9"} onPress={addGoalHandler}/>
                    </View>
                    <View className="w-1/4 ">
                        <Button className="" title='Cancel' color={"#E80A25"} onPress={onCancleGoal}/>
                    </View>
                </View>
            </View>
        </Modal>

    );
}
export default GoalInput;