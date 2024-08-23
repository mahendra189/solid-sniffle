import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Templates from './app/navigation/templates';
import CreateTemplates from './app/navigation/createtemplate';
import { GlobalProvider } from './app/context/GlobalContext';
import EditorScreen from './app/navigation/EditorScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Templates" component={Templates} />
          <Stack.Screen name="Create Templates" component={CreateTemplates} />
          <Stack.Screen name="EditorScreen" component={EditorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
