/**
 * Created by MLmediapps on 21/06/2016.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight
} from 'react-native';

const images = [
    require('../../images/monkey1.jpeg'),
    require('../../images/monkey2.jpeg'),
    require('../../images/monkey3.jpeg'),
    require('../../images/monkey4.jpeg'),
    require('../../images/monkey5.jpeg'),
    require('../../images/monkey6.jpeg'),
    require('../../images/monkey7.jpeg'),
    require('../../images/monkey8.jpeg'),
    require('../../images/monkey9.jpeg')
];

export class MonkeyList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9'
            ]),
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={{flex:1}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <TouchableHighlight onPress={()=>{this.props.onMonkeyPressed(images[rowData])}} style={styles.container}><Image source={images[rowData]} /></TouchableHighlight>}
                />
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Back!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


});

