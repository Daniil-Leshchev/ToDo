import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.leftItem}>
                <TouchableOpacity style={styles.square} activeOpacity={0.4}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.circular} activeOpacity={0.6}></TouchableOpacity>
        </View>
    );
}

let elementColor = '#55BCF6';
const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    leftItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: elementColor,
        opacity: 0.6,
        marginRight: 15
    },

    itemText: {
        maxWidth: '80%'
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: elementColor,
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;