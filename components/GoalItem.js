import { Text, View, Pressable, StyleSheet} from 'react-native';
function GoalItem({itemData,onDeleteItem,id}){
    return(
      <View className="w-full border rounded-lg shadow-lg border-gray-700  bg-gray-700/50 my-1" key={`goal-${itemData.index}`}>
        <Pressable android_ripple={{color:"#dddddd"}} 
        onPress={onDeleteItem.bind(this,id,itemData)}
        style={({pressed})=>pressed&&styles.pressedItem}>
          <Text className="p-2 text-gray-300 ">{itemData}</Text>
        </Pressable>
      </View>
    );
}
const styles=StyleSheet.create({
  pressedItem:{
    opacity:0.5,
  }
});
export default GoalItem;