import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions,Slider} from 'react-native';

export default class Period_2A extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value :0,
            sliderInfo:{
                min: 21,
                max: 35,
                step: 1,
               
            }
        }
    }
    gotToNextScreen() {
      this.props.btnClickEvent()
    }
    handleValueChange = (e) => {
      
        this.setState({value:e})
    }
    render(){
        return(
            <View style={{ flex: 2, flexDirection: 'column', position: "absolute" }}>
            <View style={styles.container}>
              
              <Text style={[styles.headerText]}>Cycle length is the number of days between the{'\n'} start of one period and the start of the next.</Text>        
              <Text style={styles.questionText}>What is the length of {'\n'}your menstrual cycle?</Text>
              <Text style={styles.headerText}>{this.state.value}</Text>
              <Slider
            minimumValue={this.state.sliderInfo.min}
            maximumValue={this.state.sliderInfo.max}
            minimumTrackTintColor={"#FF7300"}
            step={this.state.sliderInfo.step}
            value = {this.state.value}
            onValueChange={ this.handleValueChange}         
           />
              <View style = {[styles.flex1,styles.center]}>
              <TouchableOpacity style = {styles.button} onPress ={this.gotToNextScreen.bind(this)}>   
              <Text style ={{textAlign:'center'}}>Continue </Text>  
             
              </TouchableOpacity>
              </View>
            </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
      },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        fontFamily: "Helvetica Neue",
        textAlign: "center",
        marginTop:20
      },
      questionText:{
        fontFamily: "Helvetica Neue",
        textAlign: "center",
        marginTop:50,
        fontWeight: "500",
        fontSize:15,
      },
      container : {
        height: "100%", width: '100%', flex:3,
        backgroundColor: "white", borderRadius: 50, width: Dimensions.get('window').width, height: Dimensions.get('window').height
      },
      button: {
        borderRadius: 60,
        padding: 10,
        marginTop:10,
        marginLeft: 10,
        marginRight: 10,      
        borderColor: '#333',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:120
      },
})
