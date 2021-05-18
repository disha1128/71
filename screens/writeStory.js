import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import {Header} from 'react-native-elements'
//import { SafeAreaProvider } from 'react-native-safe-area-context'
import firebase from 'firebase';
import db from '../config';

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  submitStory(){
db.collection('stories').add({
  title:this.state.title,
  author:this.state.author,
  story:this.state.story
})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="Title of the story"
          onChangeText={(title) => {
            this.setState({
              title: title,
            });
          }}></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Author of the story">
           onChangeText={(author) => {
            this.setState({
              author: author,
            });
          }}
          </TextInput>
        <TextInput
          style={styles.inputBox2}
          multiline={true}
          placeholder="Write Story">
           onChangeText={(story) => {
            this.setState({
              story: story,
            });
          }}
          </TextInput>
        <TouchableOpacity style={styles.submitButton} onPress={this.submitStory()}> <Text style={styles.submitButtonText}>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  
  inputBox: {
    width: 300,
    height: 40,
    borderWidth: 0.5,
    margin: 10,
    fontSize: 20,
  },
  inputBox2: {
    width: 300,
    height: 400,
    borderWidth: 0.5,
    margin: 10,
    fontSize: 20,
  },
  scanButton: {
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
  },
  submitButton: {
    backgroundColor: 'orange',
    width: 130,
    height: 30,
    marginBottom: 12,
    marginTop: 5,
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
