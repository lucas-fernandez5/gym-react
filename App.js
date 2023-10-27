import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Config from "./Config";
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Configuracion" component={Config} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>   
    </NavigationContainer>

  );
}