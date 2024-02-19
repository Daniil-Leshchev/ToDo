import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from './components/Task';
import React, {useState} from 'react';
export default function App() {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);
	const handleAddTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask(null);
	}

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	}

	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
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
			</View>

			{/* view который подстраивается под клавиатуру, чтобы не мешать контенту */}
			<KeyboardAvoidingView
				style={styles.writeTaskWrapper}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
				{/* разная работа с элементами ос, поэтому нужно ставить разные свойства */}
				<TextInput style={styles.input} placeholder='Write a task' onChangeText={text => setTask(text)} value={task}/>
				<TouchableOpacity activeOpacity={0.6} onPress={() => handleAddTask()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
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
		flex: 1,
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
		alignItems: 'center'
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#fff',
		borderRadius: 60, 
		width: 270,
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
	}
});