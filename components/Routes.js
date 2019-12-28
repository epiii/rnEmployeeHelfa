import Homex from './HomeScreen';
import Employeex from './EmployeeScreen';
import Profilex from './ProfileScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const NavStack = createStackNavigator({
    Home: {
        screen: Homex
    },
    Employee: {
        screen: Employeex
    },
})


const BottomTab = createBottomTabNavigator({
    Home: {
        screen: NavStack
    },
    Profile: {
        screen: Profilex
},
})

export default Routes = createAppContainer(BottomTab);