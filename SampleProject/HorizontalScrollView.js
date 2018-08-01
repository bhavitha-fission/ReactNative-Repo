import React, { Component } from 'react'

import {
    AppRegistry,
    ScrollView,
    View,
    Dimensions,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import HeaderComponent from './HeaderComponent'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class HorizontalScrollView extends Component {

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Scroll';
        return { drawerLabel };
    }
    render() {

        return (
            <View style={styles.container}>
           <HeaderComponent {...this.props} /> 
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}>
                    <View style={styles.first}>
                        <Image source={require('./laugh.jpg')} style={styles.image} />
                    </View>

                    <View style={styles.second}>
                        <Image source={require('./smile.jpg')} style={styles.image} />
                    </View>

                    <View style={styles.third}>
                        <Image source={require('./lol.jpg')} style={styles.image} />
                    </View>

                    <View style={styles.fourth}>
                        <Image source={require('./flower.jpg')} style={styles.image} />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    first: {
        backgroundColor: '#5f9ea0',
        flex: 1,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth
    },

    second: {
        backgroundColor: '#FF00FF',
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth

    },

    third: {
        backgroundColor: '#8a2be2',
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth

    },

    fourth: {
        backgroundColor: '#663399',
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth

    },

    image: {
        position: 'absolute',
        alignItems: 'center',
        width: 200,
        height: 200,
    },
});
