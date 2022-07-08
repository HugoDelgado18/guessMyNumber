import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import diceImage from './assets/images/background.png';


import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#046582', '#F6F5F5']} style={styles.rootScreen} >
      <ImageBackground 
      source={diceImage}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
