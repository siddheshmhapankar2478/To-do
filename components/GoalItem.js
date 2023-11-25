import { Text, View} from 'react-native';
function GoalItem({itemData}){
    return(
      <View className="p-2 w-5/6 border rounded-lg border-gray-200  bg-blue-400 my-2" key={`goal-${itemData.index}`}>
        <Text className="text-white">{itemData}</Text>
      </View>
    );
}
export default GoalItem;