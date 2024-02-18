import { StyleSheet, Text, View } from "react-native";
import Task from './components/Task';
export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>{weekday}'s tasks</Text>
				<View style={styles.items}>
					<Task text={'Task 1'}/>
					<Task text={'Task 2'}/>
					<Task text={'One More Task'}/>
					<Task text={'Long text to check if it for overflowing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum auctor metus ut volutpat. In nisl elit, blandit vel ex.'}/>
				</View>
			</View>
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
	items: {}
});