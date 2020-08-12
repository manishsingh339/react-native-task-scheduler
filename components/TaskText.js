import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TaskText = (props) => {    
    const handleTaskChange = (input)=> {
        props.handleTaskChange(input);
    }
    return (
        <View style={styles.taskTextContainer}>
            <Text style={styles.label}>
                Enter Task:
            </Text>
            <TextInput style={styles.textInput} onChangeText={handleTaskChange}
                autoCorrect={true}></TextInput>
        </View>
    )
}

export default TaskText

const styles = StyleSheet.create({
    taskTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    label: {
        fontWeight: '700',
        fontSize: 16      
    },
    textInput: {
        borderColor: '#333333',
        fontSize: 16,
        fontWeight: '600',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 4,
        width: 290
    }
})
