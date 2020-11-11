import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014307Navigator from '../features/BlankScreen014307/navigator';
import BlankScreen114306Navigator from '../features/BlankScreen114306/navigator';
import BlankScreen014270Navigator from '../features/BlankScreen014270/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
