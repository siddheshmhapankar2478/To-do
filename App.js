import React, {useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View className="flex-1 ">
      <View className="flex flex-row justify-center mt-10 ">
        <TextInput className="h-20 p-2 mx-2 border border-gray-200 border-1"
        defaultValue="You can type in me"/>
        <Button title='Add Goal'/>
      </View>
      <View className="flex flex-row justify-center mt-10 ">
      <Button title='Add Goal'/>
      </View>
    </View>
  );
}

