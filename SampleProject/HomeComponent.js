import React, { Component } from 'react';
import {
    Text, View, Image, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import FlatListData from './data/FlatListData';

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.nextScreen = this.nextScreen.bind(this);
    }

    nextScreen(item) {
        debugger
        this.props.navigation.navigate('ScreenDetails', { "imageURL": item.imageUrl, "name": item.name })

    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',

            }}>
                <View style={{
                    flex: 1,

                }}>
                    <HeaderComponent {...this.props} /> 
                    <FlatList data={FlatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} nextScreen={this.nextScreen}>
                                </FlatListItem>
                            )
                        }
                        }
                    >
                    </FlatList>
                </View>
            </View>
        );
    }

}

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
    }
    next() {
        this.props.nextScreen(this.props.item);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#FEFEFE',

                }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{
                            width: 100, height: 100, flex:1, margin: 5
                        }}
                        resizeMode="contain"
                    >
                    </Image>
                    <View style={{
                        flex: 2,
                        flexDirection: 'column',
                    }}>
                        <Text style={styles.titleAttributes}>{this.props.item.name}</Text>
                        <Text style={styles.subTitleAttributes}>{this.props.item.foodDescription}</Text>
                    </View>
                    <TouchableOpacity style={{ marginRight: 10, justifyContent: 'center' }}
                        onPress={this.next}>
                        <Image
                            style={styles.navigateNext}
                            source={require('./navigate_next.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    height: 1,
                    backgroundColor: '#696969'
                }}>

                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    titleAttributes: {
        color: '#696969',
        padding: 10,
        fontSize: 20,
    },
    subTitleAttributes: {
        color: '#696969',
        padding: 5,
        fontSize: 16,
    },
    navigateNext: {
        width: 30,
        height: 30
    }
});

