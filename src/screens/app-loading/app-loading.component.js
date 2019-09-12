import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, ImageBackground, ActivityIndicator, StyleSheet, AsyncStorage, Text} from 'react-native';
import TextBase from '@text-base'

class AppLoadingScreen extends React.Component
{
    // load state from AsyncStorage

    render(){
        return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ImageBackground  source={require("@asset/images/app-loading-bg.png")} style={{
                width: "100%",
                height: "100%",
                flex: 1, justifyContent: "center", alignItems: "center"
            }} resizeMode="cover">
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require("@asset/images/app-loading-logo.png")}/>
                    <ActivityIndicator size="large" style={{marginTop: 14,  }} color="white"/>
                </View>
                <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 23, color: "#fff"}}>No Internet connection!</Text>
            </ImageBackground>
        </View>
    }
}

export default AppLoadingScreen;