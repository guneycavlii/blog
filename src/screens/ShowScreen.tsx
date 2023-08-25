import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import {AntDesign} from "@expo/vector-icons";


const ShowScreen = ({navigation}) => {

  const {state} = useContext(BlogContext);
  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View style={styles.viewStyle}>
      <View style={{ margin: 10}}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>{blogPost.title}</Text>
        <Text style={{fontSize: 16}}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => <TouchableOpacity onPress={()=>navigation.navigate("Edit",{id: navigation.getParam("id")})}>
      <AntDesign name="edit" size={30} color="black" style={{marginRight: 10}}/>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({

  viewStyle: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: "black",

  },

})

export default ShowScreen