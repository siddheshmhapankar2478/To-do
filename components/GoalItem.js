import { Text, View, Pressable, StyleSheet} from 'react-native';
function GoalItem({itemData,onDeleteItem,id}){
    return(
      <View className="w-5/6 border rounded-lg border-gray-200  bg-blue-400 my-2" key={`goal-${itemData.index}`}>
        <Pressable android_ripple={{color:"#dddddd"}} 
        onPress={onDeleteItem.bind(this,id)}
        style={({pressed})=>pressed&&styles.pressedItem}>
          <Text className="p-2 text-white">{itemData}</Text>
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