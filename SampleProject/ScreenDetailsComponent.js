import React, { Component } from 'react';
import {

    Text,
    Image,
    View,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class ScreenDetails extends Component {

    static navigationOptions = {
        headerRight: (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 5 }}
                onPress={console.log('hi')}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('./more_vert.png')}
                />
            </TouchableOpacity>
        ),
    }

    ShowHideActivityIndicator = () => {

        if (this.state.isLoading == true) {
            this.setState({ isLoading: false })
        }
        else {
            this.setState({ isLoading: true })
        }
    }

    onClickButton = () => {
        alert('button clciked');
    }

    render() {
        //get param values
        const { navigation } = this.props;
        const imageURL = navigation.getParam('imageURL', 'imageURL');
        const name = navigation.getParam('name', 'name');
        console.log('image url is', imageURL);

        return (
            <View>
                <View style={styles.imageView}>
                    <Image style={{ width: Dimensions.get('window').width, height: 210 }} source={{ uri: imageURL }} />
                </View>

                <View style={styles.textView}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button style={{ backgroundColor: 'red' }} title='Address 1' onPress={this.onClickButton}></Button>
                    <Button style={{ backgroundColor: 'blue' }} title='Address 2' onPress={this.onClickButton}></Button>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    imageView: {
        width: Dimensions.get('window').width,
        height: 220,
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        bottom: 0,

    },
    textView: {
        width: Dimensions.get('window').width,
        height: 200,
        top: 215,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    buttonContainer: {
        top: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 200
    },
    header: {
        height: 60,
        width: Dimensions.get('window').width,
        backgroundColor: '#9370DB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 23
    },

})