import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,ImageBackground,Platform,Alert } from 'react-native';

export default class Display extends Component
{
    static navigationOptions =
    {
      title: 'View',
    };
  constructor(props)
  {
 
    super(props);
 
    this.state = { 
    isLoading: true
  }
  }
 
  componentDidMount() {
    
       return(fetch('')
         .then((response) =>response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
            
           });
         })
         .catch((error) => {
           console.error(error);
         }) 
       )}
 
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "black",
        
        
          }}
        
      />

    );
  
}
 
 
  render() {
 
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20,backgroundColor:'lightgrey'}}>
          <Text style={{flex: 1, paddingTop: 40,textAlign:'center',alignSelf:'center'}}>History Is loading  </Text>
        
        </View>
      );
    }

 
    return (
 
 
 
        <View style={styles.MainContainer}>
       
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}> History </Text>
               <FlatList
               
                  data={ this.state.dataSource }
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                 
         
                  renderItem={({item}) => <View>
                    <Text style={styles.FlatListItemStyle} >
                    Date: {item.b} </Text>
                  <Text style={styles.FlatListItemStyle}  > Time :{item.a} </Text>
                  <Text style={styles.FlatListItemStyle}  > Slot: {item.c} </Text>
                  <Text style={styles.FlatListItemStyle}  > Area: {item.d} </Text>
                  <Text style={styles.FlatListItemStyle}  > Status: {item.e} </Text>
                  </View>}
         
                  //keyExtractor={item => item.price}
                  
                  />
            
        </View>
                    
            );
          }}
          
const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue'
    },
    container1: {
  
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue'
    },
    MainContainer1:
   {
    
      flex:1,
      margin: 10,
      backgroundColor:'lightgrey',
      justifyContent: 'center',
    
   },
   
   
    textViewContainer1: {
      
      padding:5,
      fontSize: 20,
      color: 'white',
     },
  
    inputBox: {
      width: 300,
      height: 50, 
      borderRadius: 25,
  
      backgroundColor: '#B1B1B0',
  
      paddingHorizontal: 16,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#79346C',
  
    },
    button: {
      width: 150,
      backgroundColor: 'grey',
      borderRadius: 25,
      padding: 10,
      marginTop: 20,
      paddingVertical: 10
    },
    TextStyle:
    {
  
      textAlignVertical: 'center',
      fontSize: 23,
      textAlign: 'center',
      color: '#000',
  
    },
    MainContainer :{
  backgroundColor:'lightgrey',
      justifyContent: 'center',
      flex:1,
      margin: 10,
      paddingTop: 10
      
      },
      
      FlatListItemStyle: {
          padding: 10,
          fontSize: 20,
          height: 44,
        },
      
  
    rowViewContainer:
    {
      backgroundColor: "lightpink",
      alignSelf:'center',
      
    
      fontWeight: 'bold',
    
      fontSize: 14,
      textAlign: "center",
      width: 350,
  
      marginLeft: 1,
      borderWidth: 1,
      padding: 5
  
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      padding: 10,
      color: '#79346C',
      backgroundColor: 'yellow',
      textAlign: 'center'
    },
  });
