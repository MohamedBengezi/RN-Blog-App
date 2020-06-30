import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => getBlogPosts());
        return () => listener.remove();
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                    <Feather style={styles.icon} name="trash-2" color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />

        </View>
    );
};

//Adding a Plus sign in the header
HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        height: 100,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#e7e4e4',
        borderBottomWidth: 1,
        paddingVertical: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        paddingLeft: 10,
    },
    icon: {
        fontSize: 24,
        paddingRight: 10
    }

});

export default HomeScreen;