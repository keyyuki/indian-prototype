import React from 'react';
import codePush from "react-native-code-push";
import App from './app.provider';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
export default codePush(codePushOptions)(App);
