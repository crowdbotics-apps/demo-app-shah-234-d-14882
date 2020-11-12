import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014415Navigator from '../features/BlankScreen014415/navigator';
import BlankScreen014414Navigator from '../features/BlankScreen014414/navigator';
import BlankScreen114411Navigator from '../features/BlankScreen114411/navigator';
import BlankScreen014410Navigator from '../features/BlankScreen014410/navigator';
import BlankScreen114407Navigator from '../features/BlankScreen114407/navigator';
import BlankScreen014406Navigator from '../features/BlankScreen014406/navigator';
import BlankScreen014405Navigator from '../features/BlankScreen014405/navigator';
import BlankScreen114402Navigator from '../features/BlankScreen114402/navigator';
import BlankScreen014401Navigator from '../features/BlankScreen014401/navigator';
import BlankScreen114398Navigator from '../features/BlankScreen114398/navigator';
import BlankScreen014397Navigator from '../features/BlankScreen014397/navigator';
import BlankScreen014395Navigator from '../features/BlankScreen014395/navigator';
import BlankScreen114392Navigator from '../features/BlankScreen114392/navigator';
import BlankScreen014391Navigator from '../features/BlankScreen014391/navigator';
import BlankScreen114388Navigator from '../features/BlankScreen114388/navigator';
import BlankScreen014387Navigator from '../features/BlankScreen014387/navigator';
import BlankScreen014386Navigator from '../features/BlankScreen014386/navigator';
import BlankScreen114383Navigator from '../features/BlankScreen114383/navigator';
import BlankScreen014382Navigator from '../features/BlankScreen014382/navigator';
import BlankScreen114379Navigator from '../features/BlankScreen114379/navigator';
import BlankScreen014378Navigator from '../features/BlankScreen014378/navigator';
import BlankScreen014376Navigator from '../features/BlankScreen014376/navigator';
import BlankScreen114373Navigator from '../features/BlankScreen114373/navigator';
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
BlankScreen014415: { screen: BlankScreen014415Navigator },
BlankScreen014414: { screen: BlankScreen014414Navigator },
BlankScreen114411: { screen: BlankScreen114411Navigator },
BlankScreen014410: { screen: BlankScreen014410Navigator },
BlankScreen114407: { screen: BlankScreen114407Navigator },
BlankScreen014406: { screen: BlankScreen014406Navigator },
BlankScreen014405: { screen: BlankScreen014405Navigator },
BlankScreen114402: { screen: BlankScreen114402Navigator },
BlankScreen014401: { screen: BlankScreen014401Navigator },
BlankScreen114398: { screen: BlankScreen114398Navigator },
BlankScreen014397: { screen: BlankScreen014397Navigator },
BlankScreen014395: { screen: BlankScreen014395Navigator },
BlankScreen114392: { screen: BlankScreen114392Navigator },
BlankScreen014391: { screen: BlankScreen014391Navigator },
BlankScreen114388: { screen: BlankScreen114388Navigator },
BlankScreen014387: { screen: BlankScreen014387Navigator },
BlankScreen014386: { screen: BlankScreen014386Navigator },
BlankScreen114383: { screen: BlankScreen114383Navigator },
BlankScreen014382: { screen: BlankScreen014382Navigator },
BlankScreen114379: { screen: BlankScreen114379Navigator },
BlankScreen014378: { screen: BlankScreen014378Navigator },
BlankScreen014376: { screen: BlankScreen014376Navigator },
BlankScreen114373: { screen: BlankScreen114373Navigator },
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
