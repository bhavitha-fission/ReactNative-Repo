import React, { Component } from 'react';
import {
  TouchableOpacity, Text, View, StyleSheet, Dimensions, Image, AsyncStorage
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';


class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    this.openCamera = this.selectPhotoTapped.bind(this);

  }



  state = {
    imageSource: null,
    userName:null,
    email:null
  }

  selectPhotoTapped() {

    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        AsyncStorage.setItem('imageURI', JSON.stringify(source))
        this.setState({
          imageSource: source
        });
      }
    }
    );
  }

  async componentWillMount() {
    let getImageUrl = await AsyncStorage.getItem('imageURI');
    getImageUrl = JSON.parse(getImageUrl)
    this.setState({ imageSource: getImageUrl})

    //get userObject
   var tempArray=[];
    let getUserObject = await AsyncStorage.getItem('userObject');
    tempArray = JSON.parse(getUserObject);
    console.log(tempArray[0].username)
    console.log(tempArray[0].email)
    this.setState({userName:tempArray[0].username})
    this.setState({email:tempArray[0].email}) 
  }


  render() {

    return (
      <View>
        <HeaderComponent {...this.props} />
        <View style={styles.topView}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
              {this.state.imageSource === null ? <Text>Select a Photo</Text> :
                <Image style={styles.avatar} source={this.state.imageSource} />
              }
            </View>
          </TouchableOpacity>
          }
            {
           <Text> name : {this.state.userName}{"\n"} email :{this.state.email}</Text>
           }
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    userObj: state.users
  }
}

export default connect(mapStateToProps)(ProfileComponent);


const styles = StyleSheet.create({

  topView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
})