import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			{/* Today's Tasks */}
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Today's tasks</Text>
				<View style={styles.items}>
					
				</View>
			</View>
		</View>
	);
}
let bcgColor = "#E8EAED"
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: bcgColor,
  	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "bold",
	},
	items: {}
});