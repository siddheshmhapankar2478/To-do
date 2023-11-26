import { Text, View, Pressable, StyleSheet} from 'react-native';
function GoalItem({itemData,onDeleteItem,id}){
    return(
      <View className="w-5/6 border rounded-lg shadow-lg border-gray-400  bg-[#ffe4] my-1" key={`goal-${itemData.index}`}>
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