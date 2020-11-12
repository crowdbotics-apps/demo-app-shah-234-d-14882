import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
