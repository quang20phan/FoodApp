import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.block1}>
          <Text>
          Square 1
          </Text>
          <StatusBar style="auto" />
      </View> 
      <View style={styles.block2}>
          <Text>
          Square 2
          </Text>
          <StatusBar style="auto" />
      </View>
      <View style={styles.block3}>
          <Text>
          Square 3
          </Text>
          <StatusBar style="auto" />
      </View>  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row'
  },
  block1 : {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: 'green'
  },

  block2 : {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: 'violet'
  },

  block3 : {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: 'red'
  }
});
