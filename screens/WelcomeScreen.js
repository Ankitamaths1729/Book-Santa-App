import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import Animation from '../components/Animation';

export default class WelcomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
         emailId:'',
         password:''
        }
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
  .then((response) => {
    return Alert.alert("user added succesfully")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errorMessage)
  });
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
  .then((response) => {
    return Alert.alert("Succesfully loggedIn")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errorMessage)
  });
    }

    render(){
    return (
    <View style={{marginTop:100}}>
     <View>
         <Text>Book Santa</Text>
         <Animation/>
     </View>
     <TextInput
     placeholder="abc@example.com"
     keyboardType="email-address"
     onChangeText={(text)=>{
         this.setState({
             emailId:text
         })
     }}
     />
      <TextInput
     placeholder="Enter your password"
     secureTextEntry={true}
     onChangeText={(text)=>{
         this.setState({
             password:text
         })
     }}
     />
     <TouchableOpacity
     onPress={()=>{
        this.userLogin(this.state.emailId,this.state.password) 
     }}
     >
         <Text>Login</Text>
     </TouchableOpacity>

     <TouchableOpacity
     onPress={()=>{
        this.userSignUp(this.state.emailId,this.state.password) 
     }}
     >
         <Text>SignUp</Text>
     </TouchableOpacity>
     </View>
     
    );
    }
  }