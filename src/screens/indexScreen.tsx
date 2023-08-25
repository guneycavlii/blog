import React, {useContext, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import {AntDesign} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

  const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();
  const listener =  navigation.addListener("didFocus", () => {
        getBlogPosts();
      });
  return () => {
    listener.remove();
  }
  }, []);

  return (
    <View>
      <FlatList data={state} keyExtractor={(blogPost) => blogPost.id} renderItem={({item}) => {
        return <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{item.title} + {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <AntDesign name="delete" size={24} color="black"/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      }}/>
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <AntDesign name="plus" size={30} color="black" style={{marginRight: 10}}/>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 10
  },
  viewStyle: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f0eeee"
  }
})

export default IndexScreen