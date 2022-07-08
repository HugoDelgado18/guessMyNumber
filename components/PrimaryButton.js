import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';


function PrimaryButton({children, onPress}) {

    // function pressHandler() {
    //     console.log('Pressed!');
    //     onPress()
    // }
    // or directly us it in the onPress tag

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => 
            pressed
             ? [styles.buttonContainer, styles.pressed]
             : styles.buttonContainer
            } 
             onPress={onPress} 
             android_ripple={{color:'white'}} 
             >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );  
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonContainer: {
        backgroundColor: '#BB8082',
        paddingVertical: 8,
        paddingHorizontal: 16,
        // flexDirection: 'row',
        elevation: 2,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
});