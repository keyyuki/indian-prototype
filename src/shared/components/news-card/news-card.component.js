import React from 'react';
import PropTypes from 'prop-types';
import { View,  Image, StyleSheet} from 'react-native';
import TextBase from '@text-base';
import SlugTimeBox from '@app/shared/components/slug-time-box/slug-time-box.component'

const ImageBox = (props) => {
    if(!'image' in props || !props.image){
        return null;
    }
    return <View>
        <Image 
            source={{uri: props.image}} 
            resizeMode="cover" width="100%" style={styles.coverImage}
        />
    </View>
}

const Card = (props) => {
    return <View style={styles.container}>
        <ImageBox image={props.image}/>
        <SlugTimeBox name={props.slug} time={props.publishDateTime} style={styles.slugTimeBox}/>
        <TextBase style={styles.title} numberOfLines={3}>{props.title}</TextBase>
    </View>
}

Card.propTypes = {
    image: PropTypes.string,
    slug: PropTypes.string,
    publishDateTime: PropTypes.string,
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginBottom: 12
    },
    coverImage: {
        aspectRatio: (288/209)
    },
    slugTimeBox: {
        marginTop: 8
    },
    title: {
        fontSize: 18, 
        fontWeight: "bold",
        lineHeight: 24
    }
})

export default Card;