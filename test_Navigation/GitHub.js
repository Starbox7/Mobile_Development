import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { View, ActivityIndicator, Text, StatusBar, FlatList, StyleSheet, Button, Linking, Image } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const Item = ({ item, res }) => (
    <View style={{ flexDirection:"row" }}>
        <View>
            <Image sourse={{ uri: res.avatar_url }} />
        </View>
        <View>
            <Text>Login: {res.login}</Text>
            <Text note numberOfLines={1}>Id: {res.id}</Text>
        </View>
        <View>
            <Button onPress={() => { Linking.opernURL(res.html_url) }}
                transparent>
                <Text>View</Text>
            </Button>
        </View>

    </View>
);

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('greg');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                //console.log(res);
                setData(res.data.items)
                setIsLoading(false);
            });
    }, [])

    const renderItem = ({ item, res }) => {
        <Item title={item.title} />

        return (
            <Item
              item={item}
              res={res}
            />
          );
    };

    return (
        <View>
            <StatusBar />
            {isLoading &&
                <ActivityIndicator />}
            <FlatList
                data={res}
                renderItem={renderItem}
                keyExtractor={item => res.id}
                />
        </View>
    );
}
export default GitHub;