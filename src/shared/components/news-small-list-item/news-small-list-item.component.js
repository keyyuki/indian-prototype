import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const imgWidth = 91;
const imgHeight = 66;
const ListItem = (props) => {   

    return <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.leftCol}>
                <Image source={{uri: props.image}} 
                    loadingIndicatorSource={require("@asset/images/Eclipse-loading.svg")}
                    width={imgWidth} height={imgHeight} resizeMode="cover"
                ></Image>
            </View>
            <View style={styles.rightCol}>

            </View>
        </View>
    </TouchableOpacity>
    
}
ListItem.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']),
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
    publishDateTime: PropTypes.string,
    onPress: PropTypes.func
}
ListItem.defaultProps  = {
    theme: 'light',
    onPress: () => {}
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14,
        marginVertical: 14,
        flexDirection: 'row',
        alignItems:"stretch"
    },
    leftCol: {
        width: imgWidth,
        height:imgHeight,
        marginRight: 12
    },
    rightCol: {
        flexDirection: "column",
        flex: 1
    },
    title:{
        color: "#252525",
        fontFamily: ""
    }
})
export default ListItem;