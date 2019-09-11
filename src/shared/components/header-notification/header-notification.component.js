import React from 'react';
import {
    View, Image, TouchableOpacity, StyleSheet, ImageBackground, Text
} from 'react-native';

let notifyIcon = require("@asset/images/header-bell.png");
let bg = require('@asset/images/header-bg.png');
const HeaderNotificationComponent = (props) => 
{    
    return <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.imageBg}>
            <TouchableOpacity>
                <View  style={styles.notifiButton}>
                    <Image source={notifyIcon} style={styles.bellI} resizeMode="cover"></Image>
                    <Text style={styles.notiText}>Check for new stories!</Text>
                </View>
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
    notifiButton:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    bellI:{
        marginRight: 8,
        width: 24,
        height: 24
    }, 
    notiText: {
        color: "white",
        fontSize: 12
    }
});
export default HeaderNotificationComponent;