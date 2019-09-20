import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {View, Image, ImageBackground, ActivityIndicator, StyleSheet, AsyncStorage, Text} from 'react-native';
import TextBase from '@text-base';
import NavigationService from '@app/shared/services/navigation.service'

//@TODO test
import { setList } from '@app/screens/home/home.action';
const dataTest = [
    {
        image: 'https://image.forbesvietnam.com.vn/645x375/Uploaded/oizwrg/himshob.buimsb/2019_09_08/healthcare_YRVS.jpg',
        slug: 'Global',
        publishDateTime: '2019-09-19 20:12:23',
        title: 'Thay đổi để bứt phá trong y tế số'
    },
    {
        image: 'https://image.forbesvietnam.com.vn/645x375/Uploaded/oizwrg/himshob.buimsb/2019_09_08/healthcare_YRVS.jpg',
        slug: 'Global',
        publishDateTime: '2019-09-18 20:12:23',
        title: 'Thay đổi để bứt phá trong y tế số 2'
    },
    {
        image: 'https://image.forbesvietnam.com.vn/645x375/Uploaded/oizwrg/himshob.buimsb/2019_09_08/healthcare_YRVS.jpg',
        slug: 'Global',
        publishDateTime: '2019-09-19 22:12:23',
        title: 'Thay đổi để bứt phá trong y tế số 3'
    },
    {
        image: 'https://image.forbesvietnam.com.vn/645x375/Uploaded/oizwrg/himshob.buimsb/2019_09_08/healthcare_YRVS.jpg',
        slug: 'Global',
        publishDateTime: '2019-09-20 08:12:23',
        title: 'Thay đổi để bứt phá trong y tế số 4'
    },
]

class AppLoadingScreen extends React.Component
{
    // load state from AsyncStorage
    componentDidMount(){
        setTimeout(() => {
            this.props.fillHomeData(dataTest)
            NavigationService.navigate('authed')
        }, 5000)
    }
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
const mapPropToState = (dispatch, ownProps) => {
    return {
        fillHomeData: (list) =>  dispatch(setList(list))
    }
}
export default connect(null, mapPropToState) (AppLoadingScreen);