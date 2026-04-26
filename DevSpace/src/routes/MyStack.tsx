import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home/Home';
import { About } from '../screens/About/About';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SobreMim" component={About} /> 
    </Stack.Navigator>
  );
}