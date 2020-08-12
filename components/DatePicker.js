import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome'

const DatePicker = (props) => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {		
		hideDatePicker();
		//console.log("A date has been picked: ", date.getTime());
		props.addTaskTime(date.getTime());
	};

	return (
		<View>
			<View style={styles.dateSelectorTriggerContainer}>
				<Icon.Button
					size={20}
					name='calendar'
					color='#333333'
					backgroundColor='#fff'								
					onPress={showDatePicker}
					selectionColor='#fff'
				></Icon.Button>
				<Text style={styles.dateSelectorTrigger} onPress={showDatePicker} >
					Select Date & Time
      			</Text>
			</View>
			<DateTimePickerModal				
				isVisible={isDatePickerVisible}
				mode="datetime"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>
		</View>
	);
};

export default DatePicker;

const styles = StyleSheet.create({
	dateSelectorTriggerContainer: {
		flexDirection: 'row',		
		alignItems: 'center',		
	},
	dateSelectorTrigger: {		
		textDecorationLine: 'underline',
		paddingTop: 20,
		paddingBottom: 20,		
		fontSize: 16,		
		fontWeight: '700'
	}
})