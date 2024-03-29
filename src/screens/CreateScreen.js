import React, { useContext } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import {Context} from '../context/BlogContext';
import BlogPostFrom from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    return <BlogPostFrom onSubmit={(title, content) => {
        addBlogPost(title,content, () => navigation.navigate('Index'));
    }}/>;
}

const styles = StyleSheet.create({

});
export default CreateScreen;