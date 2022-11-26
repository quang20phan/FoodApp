import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding1 from './components/OnBoarding1';
import OnBoarding2 from './components/OnBoarding2';
import ScreenOnBoarding from './screens/ScreenOnBoarding';
import OnBoarding3 from './components/OnBoarding3';
import OnBoarding4 from './components/OnBoarding4';
import OnBoarding5 from './components/OnBoarding5';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>

       
    // </View>
     <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding1" screenOptions={{headerShown: false,}}>

        <Stack.Screen name="OnBoarding1" component = {OnBoarding1}/>
        <Stack.Screen name="OnBoarding2" component = {OnBoarding2}/>
        <Stack.Screen name="OnBoarding3" component = {OnBoarding3}/>
        <Stack.Screen name="OnBoarding4" component = {OnBoarding4}/>
        <Stack.Screen name="OnBoarding5" component = {OnBoarding5}/>
     </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
