import React from 'react';
import {
    View, Image, TouchableOpacity, StyleSheet, ImageBackground
} from 'react-native';

let bg = require('@asset/images/header-bg.png');
let logo = require("@asset/images/header-logo.png");
let searcIcon = require("@asset/images/header-search-icon.png");

const HeaderHomeComponent = (props) => 
{    
    return <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.imageBg}>
            <TouchableOpacity>
                <Image source={logo} style={styles.logo} resizeMode="contain"></Image>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={searcIcon} style={styles.searchIcon} resizeMode="contain"></Image>
            </TouchableOpacity>
        </ImageBackground>
    </View>    
}

const styles = StyleSheet.create({
    container: {
        height: 56,        
    },
    imageBg: {        
        height: 56,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    logo: {
        marginLeft: 16,
        height: 23
    },
    searchIcon: {
        marginRight: 16
    }
});
export default HeaderHomeComponent;