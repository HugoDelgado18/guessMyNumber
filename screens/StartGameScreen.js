import { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Alert,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';




function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
            'Invalid number!',
            'Number must be a number between 1 and 99.',
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }] 
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize='none' 
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber} 
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 95,
        padding: 16,
        backgroundColor: '#F39189',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0 , height: 4},
        shadowRadius: 16,
        shadowOpacity: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#EAF6F6',
        borderBottomWidth: 2,
        color: 'white',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        paddingVertical: 8,
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1,
    },

});