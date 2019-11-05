import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenUseState from './src/screens/SquareScreenUseState';
import CounterScreenUseState from './src/screens/CounterScreenUseState';
import TextArea from './src/screens/TextArea';
import TextAreaPass from './src/screens/TextAreaPass';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareScreenUseState: SquareScreenUseState,
    CounterScreenUseState: CounterScreenUseState,
    TextArea: TextArea,
    TextAreaPass: TextAreaPass,
    BoxScreen: BoxScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
