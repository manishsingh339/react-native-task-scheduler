import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from './DatePicker';
import TaskText from './TaskText';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskTime, setTaskTime] = useState('');

    const handleTaskChange = (input)=> {        
        console.log(taskText);
        setTaskText(input);
    };  

    const addTask = ()=> {
        if(taskText && setTaskTime) {
            let task = {
                title: taskText,
                time: taskTime
            };
            setTasks([...tasks, task]);            
        } else {
            alert("Please add Task and time!");
        }
    }

    const addTaskTime = (time) => {
        setTaskTime(time);
    }

    const getTasks = () =>  (
        tasks.map((task, index) => (
            <Text key={index}>{`${task.title} @ ${new Date(task.time)}`}</Text>
        ))
    )

    return (
        <View>
            <View style={styles.taskContainer}>
                <TaskText handleTaskChange={handleTaskChange}></TaskText>
                <DatePicker addTaskTime={addTaskTime}></DatePicker>
                <Button title="Add Task" onPress={addTask}></Button>            
            </View>
            <View>
                {getTasks()}
            </View>
        </View>    
    )
}

export default Task;

const styles = StyleSheet.create({
    taskContainer: {    
    } 
})
