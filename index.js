/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/Login/Login'
import {name as appName} from './app.json';
import { Navigationcontainer } from '@react-navigation/native'

AppRegistry.registerComponent(appName, () => App);
