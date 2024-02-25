import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from './components/Task';
import React, {useState} from 'react';
import {Image} from 'expo-image';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);
	const handleAddTask = () => {
		Keyboard.dismiss();//скрываем
		setTaskItems([...taskItems, task]);//передаем в settaskitems оставшиеся taskitems и task
		setTask(null);
	}

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];//spread syntax
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	}

	return (
		<View style={styles.container}>
			{
				taskItems.length != 0 ?
					<ScrollView style={styles.tasksWrapper}>
					<Text style={styles.sectionTitle}>{weekday}'s tasks</Text>
					<View>
						{
							taskItems.map((item, index) => {
								return (
									<TouchableOpacity key={index} activeOpacity={0.6} onPress={() => completeTask(index)}>
										<Task text={item}/>
									</TouchableOpacity>
								)
							})
						}
					</View>
					</ScrollView>
				:
				<View style={styles.noTasksWrapper}>
					<Text style={styles.noTasksText}>You have no tasks for today!</Text>
					<Image style={{width: 250, height: 250}} source={require('./assets/in-app-imgs/completed-task.svg')} />
				</View>
			}
			

			{/* view который подстраивается под клавиатуру, чтобы не мешать контенту */}
			<KeyboardAvoidingView
				style={styles.writeTaskWrapper}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
				{/* разная работа с элементами ос, поэтому нужно ставить разные свойства */}
				<TextInput style={styles.input} placeholder='Create a task' onChangeText={text => setTask(text)} value={task}
				onSubmitEditing={task != null ? () => handleAddTask() : null}/>
				<TouchableOpacity activeOpacity={0.6} onPress={task != null ? () => handleAddTask() : null}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}><Icon name='plus' size={18} color={'#0984e3'}></Icon></Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}
const weekdayList = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();
const weekday = weekdayList[today.getDay()];

let bcgColor = "#E8EAED"
const styles = StyleSheet.create({
	container: {
		flex: 1,//растяжение на весь экран
		backgroundColor: bcgColor,
  	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 35,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20
	},
	writeTaskWrapper: {
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#fff',
		borderRadius: 60, 
		width: '80%',
		borderColor: '#C0C0C0',
		borderWidth: 1
	},

	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#C0C0C0',
		borderWidth: 1
	},

	noTasksWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	noTasksText: {
		fontSize: 24,
		fontFamily: 'Montserrat'
	}
});