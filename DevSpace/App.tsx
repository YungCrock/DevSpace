import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/screens/Home/Home';
import { About } from './src/screens/About/About';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
      
        <Stack.Screen name="Home" component={Home} />
        
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}