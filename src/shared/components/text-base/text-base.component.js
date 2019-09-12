import React from 'react';
import { Text, StyleSheet } from 'react-native';
import TextPropTypes from './text-base.propTypes'
import {baseText} from '@app/shared/theme/light.theme'

const TextBase = (props) => {    
    let style = styles.baseText
    if('style' in props && props.style){
        style = [styles.baseText, props.style]
    }
    return <Text {...props} style={style}/>    
}

TextBase.propTypes = TextPropTypes;

const styles = StyleSheet.create({
    baseText: baseText
    
})

export default TextBase;