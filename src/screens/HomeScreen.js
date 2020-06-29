import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../components/common/Button';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

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
        paddingVertical: 20
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }

});

export default HomeScreen;