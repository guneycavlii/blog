import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";



const BlogPostForm = ({onSubmit, initialValues}) => {

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

return <View style={styles.viewStyle}>
  <View style={{flex: 1, marginVertical: 10}}>
    <Text style={styles.textStyle}>Enter Title:</Text>
    <TextInput style={styles.textInputStyle} placeholder="Enter Title" onChangeText={setTitle}
               value={title}></TextInput>

    <Text style={styles.textStyle}>Enter Content:</Text>
    <TextInput  numberOfLines={5} multiline style={styles.textInputStyle} placeholder="Enter Content" onChangeText={setContent}
                value={content}></TextInput>
  </View>

  <TouchableOpacity onPress={()=>onSubmit(title,content)} style={{backgroundColor: "black", padding: 10, marginVertical: 10}}>
    <Text style={{color: "#fff", fontSize: 20, textAlign: "center"}}>Add Blog Post</Text>
  </TouchableOpacity>
</View>
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
}

const styles = StyleSheet.create({

  textInputStyle: {
    fontSize: 20,
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "black",
  },
  viewStyle: {
    flex: 1,
    marginHorizontal: 10,

  },
  textStyle: {

    fontSize: 20,

  }
})

export default BlogPostForm