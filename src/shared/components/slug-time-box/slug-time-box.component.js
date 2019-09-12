import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes} from 'react-native'
import TextBase from '@text-base';
import moment from 'moment';


const SlugTimeBox = (props) => {
    let displayTime = '';
    if(props.time){
        displayTime = moment(props.time, 'YYYY-MM-DD HH:mm:ss').fromNow()
    }
    let slugColor = styles.slug;
    if(props.color){
        slugColor = [styles.slug, {color: props.color}]
    }

    let containerStyle = styles.container;
    if(props.style){
        containerStyle = [styles.container, props.style]
    }
    return <View style={containerStyle}>
        <TextBase style={slugColor}>{props.name}</TextBase>
        <View style={styles.devider}></View>
        <TextBase style={styles.time}>{displayTime}</TextBase> 
    </View>
}

SlugTimeBox.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    time: PropTypes.string,
    style: ViewPropTypes.style
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-end",        
    },
    slug: {
        color: "#00B027",
        fontSize: 14,
        fontWeight: "bold"
    },
    devider: {
        width: 1,
        backgroundColor: "#636363", 
        marginHorizontal: 4,
        alignSelf:"stretch",
        marginVertical: 4
    },
    time: {
        flex: 1,
        color: "#636363",
        fontSize: 12, 
        alignSelf: "flex-end"
    }
})
export default SlugTimeBox