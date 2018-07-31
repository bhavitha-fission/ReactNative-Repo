import React, { Component } from 'react';

import {
    createStackNavigator,DrawerNavigator
  } from 'react-navigation';

  import {
    TouchableOpacity,View,Image
  } from 'react-native';

export default class HambergerIcon extends Component {

      render() {
 
        return (
     
          <View style={{flexDirection: 'row'}}>
     
            <TouchableOpacity onPress={
              ()=> this.props.navigationProps.navigate('DrawerOpen')
            } >
     
              <Image
                source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
                style={{ width: 25, height: 25, marginLeft: 5}}
              />
     
            </TouchableOpacity>
     
          </View>
        
        );
      
      
      }
    }

    class MainActivity extends Component {
 
        constructor(props) {
       
          super(props);
        
          YellowBox.ignoreWarnings([
           'Warning: componentWillMount is deprecated',
           'Warning: componentWillReceiveProps is deprecated',
         ]);
        
        }
       
         render()
         {
            return(
       
               <View style = { styles.MainContainer }>
       
                  <Text style={{fontSize: 23}}> This is Activity - 1 </Text>
                
               </View>
            );
         }
      }
       
      class SecondActivity extends Component {
       
        constructor(props) {
       
          super(props);
        
          YellowBox.ignoreWarnings([
           'Warning: componentWillMount is deprecated',
           'Warning: componentWillReceiveProps is deprecated',
         ]);
        
        }
         
           render()
           {
              return(
         
                 <View style = { styles.MainContainer }>
         
                    <Text style={{fontSize: 23}}> This is Activity - 2 </Text>
                  
                 </View>
              );
           }
        }
       
        class ThirdActivity extends Component {
       
          constructor(props) {
       
            super(props);
          
            YellowBox.ignoreWarnings([
             'Warning: componentWillMount is deprecated',
             'Warning: componentWillReceiveProps is deprecated',
           ]);
          
          }
       
             render()
             {
                return(
           
                   <View style = { styles.MainContainer }>
           
                      <Text style={{fontSize: 23}}> This is Activity - 3 </Text>
                    
                   </View>
                );
             }
          }

          const FirstActivity_StackNavigator = createStackNavigator({
            First: { 
              screen: MainActivity, 
              navigationOptions: ({ navigation }) => ({
                title: 'MainActivity',
                headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
       
                headerStyle: {
                  backgroundColor: '#FF9800'
                },
                headerTintColor: '#fff',
              })
            },
          });
       
       
          const SecondActivity_StackNavigator = createStackNavigator({
            Second: { 
              screen: SecondActivity, 
              navigationOptions: ({ navigation }) => ({
                title: 'SecondActivity',
                headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
       
                headerStyle: {
                  backgroundColor: '#FF9800'
                },
                headerTintColor: '#fff',
              })
            },
          });
       
       
          const ThirdActivity_StackNavigator = createStackNavigator({
            Third: { 
              screen: ThirdActivity, 
              navigationOptions: ({ navigation }) => ({
                title: 'ThirdActivity',
                headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
       
                headerStyle: {
                  backgroundColor: '#FF9800'
                },
                headerTintColor: '#fff',
              })
            },
          });
          

            MyDrawerNavigator = DrawerNavigator({
            MainStack: { 
              screen: FirstActivity_StackNavigator
            },
           
            SecondStack: { 
              screen: SecondActivity_StackNavigator
            },
           
            ThirdStack: { 
              screen: ThirdActivity_StackNavigator
            }
          });
           