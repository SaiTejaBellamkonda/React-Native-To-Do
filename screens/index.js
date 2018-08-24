import { Navigation } from 'react-native-navigation';

import HomeScreen from '../views/home';
import Screen2 from '../views/screen2';
import ModalScreen from '../views/modalScreen';

export function registerScreens() {
  Navigation.registerComponent('TodoApp.Home', () => HomeScreen);
  Navigation.registerComponent('TodoApp.ModalScreen', () => ModalScreen);
}
