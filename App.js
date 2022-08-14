import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LogIn from './screens/LogIn';
import Registeration from './screens/Registeration';
import PlanPremium from './screens/PlanPremium';
import Asistencia from './screens/Asistencia';
import Foro from './screens/Foro';
import Profile from './screens/Profile';
import Sabias from './screens/Sabias';
import Information from './screens/Information';
import ForoSecond from './screens/ForoSecond';
import Messenger from './screens/Messenger';
import Payments from './screens/Payments';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="Payments">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Registeration" component={Registeration} />
        <Stack.Screen name="PlanPremium" component={PlanPremium} />
        <Stack.Screen name="Asistencia" component={Asistencia} />
        <Stack.Screen name="Foro" component={Foro} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Sabias" component={Sabias} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="ForoSecond" component={ForoSecond} />
        <Stack.Screen name="Messenger" component={Messenger} />
        <Stack.Screen name="Payments" component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;