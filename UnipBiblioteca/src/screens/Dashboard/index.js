import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../../services/api';
import { styles } from './styles.js';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <>
                <ScrollView>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <FlatList
                            // data={}
                           // renderItem={({ item }) => <Item title={item.title} />}
                        />
                    </View>
                </ScrollView>
            </>
        );
    }
};