/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppLoadingScreen from '@app/screens/app-loading/app-loading.component'

AppRegistry.registerComponent(appName, () => AppLoadingScreen);
