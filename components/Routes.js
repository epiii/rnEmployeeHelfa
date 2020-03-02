import Homex from './HomeScreen';
import Searchx from './SearchEmployeeScreen';
import Listx from './ListEmployeeScreen';
import Profilex from './ProfileScreen';
import Addx from './AddEmployeeScreen';
// import Employeex from './EmployeeScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const NavStack = createStackNavigator({
    // Home: {
    //     screen: Homex
    // },
    Home: {
        screen: Homex,
        navigationOptions: () => ({
            title: 'HELFA / Employee Management',
        })
    },
    ListEmployee: {
        screen: Listx,
        navigationOptions: () => ({
            title: 'List Employee',
        })
    },
    SearchEmployee: {
        screen: Searchx,
        navigationOptions: () => ({
            title: 'Search Employee',
        })
    },
    AddEmployee: {
        screen: Addx,
        navigationOptions: () => ({
            title: 'Add Employee',
        })
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