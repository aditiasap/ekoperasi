import React, { Component } from 'react';
import { createStackNavigator, SwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigatorService from './services/navigator';

import LoginForm from './components/unauthorized/LoginForm';
import Home from './components/authorized/Home';
import MarketPlace from './components/authorized/MarketPlace';

const AuthStack = createStackNavigator({
	login: {
		screen: LoginForm,
		navigationOptions: {
			header: null
		}
	}
});

const AppStack = createBottomTabNavigator({
	Home: { screen: Home },
	'Market Place': { screen: MarketPlace }
}, {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'Home') {
				iconName = `ios-home${focused ? '' : '-outline'}`;
			} else if (routeName === 'Market Place') {
				iconName = `ios-cart${focused ? '' : '-outline'}`;
			}

			return <Ionicons name={iconName} size={25} color={tintColor} />;
		},
	}),
	tabBarOptions: {
		activeTintColor: 'rgb(255, 0, 0)'
	}
});

const Navigator = SwitchNavigator({
	Auth: AuthStack,
	App: AppStack
}, {
	initialRouteName: 'Auth'
});

class Router extends Component {
	render() {
		return (
			<Navigator
				ref={navigatorRef => {
					NavigatorService.setContainer(navigatorRef);
				}}
			/>
		);
	}
}

export default Router;
