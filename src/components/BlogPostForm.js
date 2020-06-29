import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from './common/Button';

const BlogPostForm = ({ onSubmit, initialValues = { title: '', content: '' } }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.titleStyle}>Enter Title:</Text>
            <TextInput
                style={styles.titleInput}
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="Blog Post Title"
            />

            <Text style={styles.titleStyle}>Enter Content:</Text>
            <TextInput
                style={styles.titleInput}
                value={content}
                onChangeText={text => setContent(text)}
                placeholder="abc xyz"
            />

            <Button
                title='Save'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        marginTop: 15,
        paddingLeft: 15
    }, titleInput: {
        borderWidth: 1,
        height: 75,
        marginBottom: 15
    }
});

export default BlogPostForm;