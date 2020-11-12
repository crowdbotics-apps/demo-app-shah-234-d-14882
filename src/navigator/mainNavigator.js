import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014372Navigator from '../features/BlankScreen014372/navigator';
import BlankScreen114369Navigator from '../features/BlankScreen114369/navigator';
import BlankScreen014368Navigator from '../features/BlankScreen014368/navigator';
import BlankScreen014367Navigator from '../features/BlankScreen014367/navigator';
import BlankScreen114364Navigator from '../features/BlankScreen114364/navigator';
import BlankScreen014363Navigator from '../features/BlankScreen014363/navigator';
import BlankScreen114360Navigator from '../features/BlankScreen114360/navigator';
import BlankScreen014359Navigator from '../features/BlankScreen014359/navigator';
import BlankScreen014316Navigator from '../features/BlankScreen014316/navigator';
import BlankScreen114315Navigator from '../features/BlankScreen114315/navigator';
import BlankScreen014307Navigator from '../features/BlankScreen014307/navigator';
import BlankScreen114306Navigator from '../features/BlankScreen114306/navigator';
import BlankScreen014270Navigator from '../features/BlankScreen014270/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen014372: { screen: BlankScreen014372Navigator },
BlankScreen114369: { screen: BlankScreen114369Navigator },
BlankScreen014368: { screen: BlankScreen014368Navigator },
BlankScreen014367: { screen: BlankScreen014367Navigator },
BlankScreen114364: { screen: BlankScreen114364Navigator },
BlankScreen014363: { screen: BlankScreen014363Navigator },
BlankScreen114360: { screen: BlankScreen114360Navigator },
BlankScreen014359: { screen: BlankScreen014359Navigator },
BlankScreen014316: { screen: BlankScreen014316Navigator },
BlankScreen114315: { screen: BlankScreen114315Navigator },
BlankScreen014307: { screen: BlankScreen014307Navigator },
BlankScreen114306: { screen: BlankScreen114306Navigator },
BlankScreen014270: { screen: BlankScreen014270Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
